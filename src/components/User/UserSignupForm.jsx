import React, {useState} from 'react';

import styles from "../../styles/User.module.css"
import {useDispatch} from "react-redux";
import {createUser} from "../../features/userSlice";

const UserSignupForm = ({ toggleCurrentFormType, closeForm}) => {
    const dispatch = useDispatch()
    const [file, setFile] = useState(null)
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: ""
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

        dispatch(createUser(values))
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
                Регистрация
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
                        type="name"
                        name="name"
                        placeholder={"name"}
                        value={values.name}
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

                <div className={styles.group}>
                    <input
                        type="avatar"
                        name="avatar"
                        placeholder={"ссылка на картинку"}
                        value={values.avatar}
                        autoComplete={"off"}
                        onChange={handleChanges}
                        required
                    />
                </div>
                
                <div className={styles.link} onClick={() => toggleCurrentFormType("login")}>
                    Уже есть аккаунт?
                </div>
                <button type="submit">Создать аккаунт</button>
            </form>
        </div>
    );
};

export default UserSignupForm;