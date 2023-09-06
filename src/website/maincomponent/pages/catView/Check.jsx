import React, { useEffect } from 'react'
import Auth_user from '../../../authentication/Auth_user';
import { useState } from 'react';

const Check = () => {
    const {token,http}=Auth_user();
    const [Oredr ,SetOrder]=useState([]);

const PlaceOrder=()=>{
    const data={
        product_id: '',
        product_qty: '',
        online_price: '',
        discount: '',
        pv_value: '',
        order_address: '',
        paymentmode: '',
        prototal: '',
        totalgst: '',
        gst: '',
        total: '',
        total_discount: '',
        totalpv: '',
    };
    http.post(`/order_now`,data).then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error('Error placing order:', error);
    });
};

useEffect(()=>{
    PlaceOrder();
},[]);

  return (
    <div>
Check
    </div>
  )
}

export default Check