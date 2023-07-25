import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductsQuery} from "../../features/service/productService";
import styles from "../../styles/Category.module.css"
import Products from "../Products/Products";
import {useSelector} from "react-redux";

const Category = () => {
    const {id} = useParams()
    const {list} = useSelector(({categories}) => categories)


    const defaultValues = {
        title: "",
        price_min: 0,
        price_max: 0,
    }
    const defaultParams = {
        categoryId: id,
        limit: 5,
        offset: 0,
        ...defaultValues
    }

    const [isEnd, setIsEnd] = useState(false)
    const [items, setItems] = useState([])
    const [cat, setCat] = useState("")
    const [values, setValues] = useState(defaultValues)
    const [params, setParams] = useState(defaultParams)

    const {data, isLoading, isSuccess} = useGetProductsQuery(params)

    useEffect(() => {
        if(!id) return;

        setValues(defaultValues)
        setItems([])
        setIsEnd(false)
        setParams({...defaultParams, categoryId: id})
    }, [id])

    useEffect(() => {
        if (isLoading) return;
        if(!data.length) return setIsEnd(true)

        setItems((_items) => [..._items, ...data])
    }, [data, isLoading])

    useEffect(() => {
        if(!id || !list.length) return;
        const {name} = list.find((item) => item.id === id * 1)

        setCat(name)
    }, [list, id])

    useEffect(() => {
        if(!isLoading) return;
        const products = Object.values(data)

        if(!products.length) return;
        setItems((_item) => [...items, ...products])
    }, [data])



    const handleChange = ({target: {value, name}}) => {
        setValues({ ...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setItems([])
        setIsEnd(false)
        setParams({...defaultParams, ...values})
    }

    const resetParams = () => {
        setParams(defaultParams)
    }
    console.log(data)

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{cat}</h2>

            <form className={styles.filter} onSubmit={handleSubmit}>
                <div className={styles.filter}>
                    <input
                        type="text"
                        name={"title"}
                        onChange={handleChange}
                        placeholder={"Имя товара"}
                        value={values.title}
                    />
                </div>
                <div className={styles.filter}>
                    <input
                        type="number"
                        name={"price_min"}
                        onChange={handleChange}
                        placeholder={"0"}
                        value={values.price_min}
                    />
                    <span>от</span>
                </div>
                <div className={styles.filter}>
                    <input
                        type="number"
                        name={"price_max"}
                        onChange={handleChange}
                        placeholder={"0"}
                        value={values.price_max}
                    />
                    <span>до</span>
                </div>

                <button type={"submit"} hidden/>
            </form>

            {isLoading ? (<div className={"preloader"}>
                Загрузка...
            </div>) : !isSuccess || !items.length ? (<div className={styles.back}>
                <span>Нет результатов</span>
                <button onClick={resetParams}>Сброс</button>
            </div>) : (
                <Products
                    title={""}
                    products={items}
                    style={{ padding:0}}
                    amount={items.length}/>
            )}

            {!isEnd && (<div className={styles.more}>
                <button onClick={() => setParams({...params, offset: params.offset+params.limit})}>
                    Увидеть больше
                </button>
            </div>)}

        </section>
    );
};

export default Category;