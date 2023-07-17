import React, {useState} from 'react';

import styles from "../../styles/User.module.css"
import {useDispatch} from "react-redux";
import {createUser, loginUser} from "../../features/userSlice";

const UserSignupForm = ({toggleCurrentFormType, closeForm}) => {
    const dispatch = useDispatch()
    const [file, setFile] = useState(null)
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleChanges = ({target: {value, name}}) => {
        setValues({...values, [name]: value })
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isEmpty = Object.values(values).some((val) => !val)

        if(isEmpty) return;

        dispatch(loginUser(values))
        closeForm()
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <svg className={"icon"}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
                </svg>
            </div>

            <div className={styles.title}>
                Вход
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input
                        type="email"
                        name="email"
                        placeholder={"email"}
                        value={values.email}
                        autoComplete={"off"}
                        onChange={handleChanges}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input
                        type="password"
                        name="password"
                        placeholder={"password"}
                        value={values.password}
                        autoComplete={"off"}
                        onChange={handleChanges}
                        required
                    />
                </div>

                <div className={styles.link} onClick={() => toggleCurrentFormType("signup")}>
                    Создать аккаунт
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default UserSignupForm;