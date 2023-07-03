import React from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import {useSelector} from "react-redux";
import Categories from "../Categories/Categories";
export const Home = () => {
    const { products, categories } = useSelector(( state ) => state)

    return (
        <>
            <Poster/>
            <Products products={products.list} amount={5} title={`ProductsTitle/Home`}/>
            <Categories products={categories.list} amount={5} title={`CategoriesTitle/Home`}/>
        </>
    )
}
