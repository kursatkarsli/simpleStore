import React from "react";
import { Route, Routes } from "react-router-dom";
import Library from "../components/Library";
import MainPage from '../components/MainPage'
import RegisterPage from "../components/Register";
import Login from "../components/Login";

import Home from "../components/Home";


export const Routers = () => (
    <Routes>

        <Route exact path='/' element={<MainPage />} >
            <Route path='/' element={<Home />} />
            <Route path='library' element={<Library />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />


    </Routes >
)