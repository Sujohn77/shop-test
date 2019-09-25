import React from 'react';
import "./Header.css";
import {Header} from "./Header.jsx";
import {connect} from "react-redux";

const HeaderContainer = ({addedProducts}) => {
    return <Header cartCounter={addedProducts.length}/>;
};

let mapStateToProps = (state) => ({
    addedProducts:state.productPage.addedProducts
});

export default connect(mapStateToProps)(HeaderContainer);