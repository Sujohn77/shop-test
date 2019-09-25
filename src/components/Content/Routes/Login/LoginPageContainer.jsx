import React from 'react'
import {reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {setLocalUserData} from "../../../../redux/login-reducer";
import {Redirect} from "react-router-dom";
import {LoginForm} from "./LoginPage.jsx";

const LoginReduxForm =  reduxForm({
    form: 'login'
})(LoginForm);

const LoginContainer = (props) =>{
    const logIn = (values) =>{
       props.setLocalUserData(values.login,values.password);
    };

    if(props.isAuth) return <Redirect to={"/market"}/>;

    return(
        <>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={logIn} {...props}/>
        </>
    )
};

let mapStateToProps = (state) =>({
    isAuth:state.loginPage.isAuth
});

export const LoginPageContainer = connect(mapStateToProps,{setLocalUserData})(LoginContainer);