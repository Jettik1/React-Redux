import React, {useEffect, useState} from 'react';
import styles from "../../styles/Profile.module.css"
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../features/userSlice";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const dispatch = useDispatch()

    const {currentUser} = useSelector(({user}) => user)


    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        avatar: ""
    })

    useEffect(() => {
        if(!currentUser) return;

        setValues(currentUser)
    }, [currentUser])

    const handleChanges = ({target: {value, name}}) => {
        setValues({...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isEmpty = Object.values(values).some((val) => !val)

        if(isEmpty) return;

        dispatch(loginUser(values))
    }

    return (
        <div className={styles.profile}>
            {!currentUser ? <span>Надо войти</span> : (
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
                    <button type="submit">Обновить</button>
                </form>
            )}
        </div>
    );
};

export default Profile;