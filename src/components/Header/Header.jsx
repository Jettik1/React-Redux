import React from "react";
import styles from "../../styles/Header.module.css"
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import AVATAR from "../../images/logo.jpeg"
import {Logo} from "../Logo";

const Header = () => {
    return (
        <div className={styles.header}>

            <Logo logo={styles.logo}/>

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
                        <div className={styles.input}>
                            <input type="search"
                                   name="search"
                                   placeholder={`Поиск`}
                                   autoComplete={"off"}
                                   onChange={() => {}}
                                   value={""}
                            />
                        </div>

                        {false && <div className={styles.box}></div>}
                    </form>

                    <div className={styles.account}>
                        <Link to={ROUTES.HOME} className={styles.favourites}>
                            <svg className={styles["icon-fav"]}>
                                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
                            </svg>
                            <span className={styles.count}>2</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

