import React from 'react';
import "./Header.css";
import {Header} from "./Header.jsx";
import {connect} from "react-redux";

const HeaderContainer = ({addedProducts}) => {

    let cartCounter = 0;
    addedProducts.forEach((elem) => {
        cartCounter += elem.count;
    });
    return <Header cartCounter={cartCounter}/>;
};

let mapStateToProps = (state) => ({
    addedProducts:state.productPage.addedProducts
});

export default connect(mapStateToProps)(HeaderContainer);