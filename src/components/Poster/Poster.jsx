import React from "react";
import styles from "../../styles/Home.module.css"
import Photo from "../../images/product.png"

const Poster = () => {
    return (
        <section className={styles.home}>
            <div className={styles.title}>TITLE</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>
                        SUBTITLE
                    </div>
                    <h1 className={styles.head}>head</h1>
                    <button className={styles.button}>
                        Shop now
                    </button>
                </div>
                <div className={styles.image} >
                    <img src={Photo} style={{width: "150px"}} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Poster
