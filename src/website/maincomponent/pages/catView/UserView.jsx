import React, { useEffect, useState } from 'react'
import Auth_user from '../../../authentication/Auth_user';

const UserView = () => {
    const {http,token}=Auth_user();
    const[User,SetUser]=useState([]);

    const getUser=()=>{
        http.get(`/user/profile`).then((res)=>{
            SetUser(res);
            console.log('user',res);
        })
    };

    useEffect(()=>{
        getUser();
    },[]);

  return (
    <div>

    </div>
  )
}

export default UserView