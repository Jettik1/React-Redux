import React from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import {useSelector} from "react-redux";
export const Home = () => {
    const { list } = useSelector(({ products }) => products)

    return (
        <>
            <Poster/>
            <Products products={list} amount={5} title={`ProductsTitle/Home`}/>
        </>
    )
}
