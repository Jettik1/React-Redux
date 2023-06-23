import React from "react"
//import styles from "../styles/Footer.module.css";
import {Link} from "react-router-dom";
import {ROUTES} from "../utils/routes";
import LOGO from "../images/logo2.png";

export const Logo = (props) => {
    return (
            <div className={props.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="logo"/>
                </Link>
            </div>
    )
}
