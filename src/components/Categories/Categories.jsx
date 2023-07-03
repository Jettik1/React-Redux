import React from "react";
import styles from "../../styles/Categories.module.css"
import {Link} from "react-router-dom";

const Categories = ({ title , products = [], amount }) => {
    const list = products.filter((_, i) => amount)

    return (
        <section className={styles.section}>
            <h2>{title}</h2>
            <div className={styles.list}>
                {list.map(({ id, name, image}) => (
                    <Link to={`/categoties/${id}`} key={id} className={styles.item}>
                        <div
                            className={styles.image}
                            style={{ background: `url(${image})`}}
                        />
                        <h3 className={styles.title}>{name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Categories;

