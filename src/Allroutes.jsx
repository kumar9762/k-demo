import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './website/layout/Master'
import Shop_grid from './website/maincomponent/pages/Shop_grid';
import Home from './website/maincomponent/Home';
import Login from './website/maincomponent/pages/Login';
import Register from './website/maincomponent/pages/Register';
import Brands from './website/maincomponent/pages/Brands';
import ContactUs from './website/maincomponent/pages/ContactUs';
import AboutUs from './website/maincomponent/pages/AboutUs';
import Blogs from './website/maincomponent/pages/Blogs';
import './App.css';
import SubCatView from './website/maincomponent/SubCatView';



const Allroutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Master Rcf={Home}/>} />
                    <Route path="/shop_grid" element={ <Master Rcf={Shop_grid}/>} />
                    <Route path="/subcatview/:cat_id/:sub_id" element={ <Master Rcf={SubCatView}/>} />

                    <Route path="/brands" element={ <Master Rcf={Brands}/>} />
                    <Route path="/contactus" element={ <Master Rcf={ContactUs}/>} />
                    <Route path="/aboutus" element={ <Master Rcf={AboutUs}/>} />
                    <Route path="/blogs" element={ <Master Rcf={Blogs}/>} />

                    <Route path="/login" element={ <Login/>} />
                    <Route path="/register" element={ <Register/>} />


                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Allroutes