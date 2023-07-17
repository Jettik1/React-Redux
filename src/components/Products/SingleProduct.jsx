import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import {useGetProductByIdQuery} from "../../features/service/productService";
import {ROUTES} from "../../utils/routes";
import Product from "./Product";
import Products from "./Products";
import {getRelatedProducts} from "../../features/productsSlice";

const SingleProduct = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    const { list, related} = useSelector(({ products }) => products)

    const { data, isLoading, isFetching, isSuccess } = useGetProductByIdQuery({id})

    useEffect(() => {
        if(!data || !list.length) return;

        if(!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME)
        }
    }, [isLoading, isFetching, isSuccess])

    useEffect(() => {
        if(data) {
            dispatch(getRelatedProducts(data.category.id))
        }
    }, [data])

    /*console.log(data)*/

    return !data ? (
        <section className={"preloader"}>Загрузка</section>
    ) : (
        <>
            <Product {...data}/>
            <Products products={related} amount={5} title={`ProductsTitle/SingleProduct(Связанные товары)`}/>
        </>
    )

}

export default SingleProduct
