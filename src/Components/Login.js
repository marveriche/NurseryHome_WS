import React, { Component, optionsState } from "react";

const Login = () => {
    return(
    <input type="text" id="emailTxt" placeholder="Email"/>
    <br/>
    <input type="password" id="passwordTxt" placeholder="Password"/>
    <br/>
    <button id="loginBtn">Login</button>
    );
};

export default Login;
