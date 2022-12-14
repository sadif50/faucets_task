import React from 'react';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home/Home';
import Navbar from '../components/Navbar/NavBar';
import Notice from '../components/Notice/Notice';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Notice></Notice>
            <Home></Home>
            <Footer></Footer>
        </>
    );
};

export default Main;