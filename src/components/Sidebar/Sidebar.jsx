import React from "react";
import styles from "../../styles/Sidebar.module.css"
import {NavLink} from "react-router-dom";


const Sidebar = () => {
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>Categories</div>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <NavLink to={`/categories/${1}`}>
                            Link
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.footer}>
                <a href="/help" className={styles.link}>
                    Help
                </a>
            </div>
        </section>
    )
}

export default Sidebar;

