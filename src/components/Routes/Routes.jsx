import React from "react"
import {Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";

import { ROUTES } from "../../utils/routes"
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";

export const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>} />
        <Route path={ROUTES.PRODUCT} element={<SingleProduct />}/>
        <Route path={ROUTES.PROFILE} element={<Profile />}/>
    </Routes>
);
