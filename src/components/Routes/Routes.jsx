import React from "react"
import {Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";

export const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>} />
    </Routes>
);
