import React, {useEffect, useState} from 'react';

import styles from "../../styles/Product.module.css"
import {current} from "@reduxjs/toolkit";
import {ROUTES} from "../../utils/routes";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import userSlice, { addItemToCart } from "../../features/userSlice"

const Product = (item) => {
    const { title, price, description, images } = item

    const dispatch = useDispatch();

    const [currentImage, setCurrentImage] = useState()

    useEffect(() => {
        if(!images.length) return ;

        setCurrentImage(images[0])
    },[images])

    const addToCart = () => {
        dispatch(addItemToCart(item))
    }

    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div className={styles.current}
                     style={{ backgroundImage: `url(${currentImage})`}}
                />
                <div className={styles['images-list']}>
                    {images.map((image, i) => (
                        <div
                            className={styles.image}
                            key={i}
                            style={{ backgroundImage: `url(${image})`}}
                            onClick={() => setCurrentImage(image)}
                        />
                    ))}
                </div>

            </div>

            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>
                    {price}₽
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.actions}>
                    <button onClick={addToCart} className={styles.add}>Добавить в корзину</button>

                    <Link to={ROUTES.HOME}>На главную страницу</Link>
                </div>
            </div>
        </section>
    );
};

export default Product;