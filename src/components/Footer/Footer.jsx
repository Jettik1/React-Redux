import React from "react";
import styles from "../../styles/Footer.module.css"
import {Logo} from "../Logo";

const Footer = () => {
    return (
        <section className={styles.footer}>

            <Logo logo={styles.logo}/>

            <div className={styles.socials}>
                <a href={`tel:${process.env.REACT_APP_PHONE}`}>{process.env.REACT_APP_PHONE}</a>
            </div>
        </section>
    )
}

export default Footer;

