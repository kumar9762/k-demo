import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth_user = () => {
  const navigate=useNavigate();
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const userString = JSON.parse(sessionStorage.getItem("user"));
    return userString;
  };

  const saveToken = (user, token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());
  const http = axios.create({
    baseURL: "https://vsmart.ajspire.com/api",
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  const logout=()=>{
    sessionStorage.clear();
    setToken(null);
    setUser(null);
    navigate("/");
  };

  return {
    setToken:saveToken,
    token,
    http,
    user,
    logout,
  };
};

export default Auth_user;
