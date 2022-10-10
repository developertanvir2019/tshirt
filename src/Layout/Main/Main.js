import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../component/Header/Header';
import Home from '../../component/Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;