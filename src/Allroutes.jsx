import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './website/layout/Master'
import Shop_grid from './website/maincomponent/pages/Shop_grid';
import Home from './website/maincomponent/Home';

import Brands from './website/maincomponent/pages/Brands';
import ContactUs from './website/maincomponent/pages/ContactUs';
import AboutUs from './website/maincomponent/pages/AboutUs';
import Blogs from './website/maincomponent/pages/Blogs';
import './App.css';
import SubCatView from './website/maincomponent/SubCatView';
import CartDetails from './website/maincomponent/pages/catView/CartDetails';
import All_ProdShop from './website/maincomponent/pages/All_ProdShop';
import Login from './website/authentication/Login';
import Register from './website/authentication/Register';
import Search from './website/maincomponent/pages/Search';
import WishlistDetail from './website/maincomponent/pages/catView/WishlistDetail';
import Search1 from './website/maincomponent/pages/Search1';
import Search2 from './website/maincomponent/pages/Search2';




const Allroutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Master Rcf={Home}/>} />
                    <Route path="/shop_grid" element={ <Master Rcf={Shop_grid}/>} />
                    <Route path="/subcatview/:cat_id/:sub_id" element={ <Master Rcf={SubCatView}/>} />
                    <Route path="/brands/:brand_id" element={ <Master Rcf={Brands}/>} />

                    <Route path="/all_prodshop/:page" exact element={ <Master Rcf={All_ProdShop}/>} />
                    <Route path="/all_prodshop" element={ <Master Rcf={All_ProdShop}/>} />

                    <Route path="/cartdetails/:product_id" element={ <Master Rcf={CartDetails}/>} />
                    <Route path="/wishlistdetail/:product_id" element={ <Master Rcf={WishlistDetail}/>} />

                    <Route path="/search" element={ <Master Rcf={Search}/>} />
                    {/* <Route path="/search1" element={ <Master Rcf={Search1}/>} /> */}
                    {/* <Route path="/search2" element={ <Master Rcf={Search2}/>} /> */}



                    <Route path="/wishlistdetail" element={ <Master Rcf={WishlistDetail}/>} />
                    <Route path="/cartdetails" element={ <Master Rcf={CartDetails}/>} />
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