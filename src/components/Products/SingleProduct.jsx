import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import {useGetProductByIdQuery} from "../../features/service/productService";
import {ROUTES} from "../../utils/routes";
import Product from "./Product";

const SingleProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const { data, isLoading, isFetching, isSuccess } = useGetProductByIdQuery({id})

    useEffect(() => {
        if(!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME)
        }
    }, [isLoading, isFetching, isSuccess])

    console.log(data)

    return !data ? (
        <section className={"preloader"}>Загрузка</section>
    ) : (
        <>
            <Product {...data}/>
        </>
    )

}

export default SingleProduct
