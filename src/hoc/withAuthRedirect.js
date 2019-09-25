import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import {getLocalUserData} from "../redux/login-reducer";


let mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth
    }
};
export const withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        componentDidMount() {
            this.props.getLocalUserData();
        }

        render(){

            // NOT LOGGED TO LOGIN ELSE TO COMPONENT
             if(!this.props.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props}/>
        }
    }


    let ConnectRedirectComponent =  connect(mapStateToProps,{getLocalUserData})(RedirectComponent);

    return ConnectRedirectComponent;

};

