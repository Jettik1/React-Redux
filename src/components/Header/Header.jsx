import React from "react";
import styles from "../../styles/Header.module.css"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import LOGO from "../../images/logo2.png"
import AVATAR from "../../images/logo.jpeg"
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="logo"/>
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.user}>
                    <div className={styles.avatar} style={{backgroundImage: `url(${AVATAR})`}}>
                        <div className={styles.username}>Guest</div>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.icon}>
                            <svg className="icon">
                                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
                            </svg>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header;

