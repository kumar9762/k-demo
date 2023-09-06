import React, { useEffect } from 'react'
import Auth_user from '../../../authentication/Auth_user';
import { useState } from 'react';

const Check = () => {
    const {token,http}=Auth_user();
    const [Oredr ,SetOrder]=useState([]);

const PlaceOrder=()=>{
    http.post(`/order_now`).then((res)=>{
        console.log(res);
    })
};

useEffect(()=>{
    PlaceOrder();
},[]);

  return (
    <div>
fghjkl
    </div>
  )
}

export default Check