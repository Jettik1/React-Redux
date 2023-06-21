import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import "./styles/index.css";

import App from "./components/App/App";

const root = createRoot(document.getElementById('root'))
root.render(<BrowserRouter>
    <App />
</BrowserRouter>)
