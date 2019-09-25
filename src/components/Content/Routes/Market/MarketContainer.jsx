import React from 'react';
import {connect} from "react-redux";
import {MarketPage} from "./MarketPage.jsx";
import {addProduct} from "../../../../redux/product-reducer";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";


const MarketContainer = ({products,addProduct}) => {
    return <MarketPage addProduct={addProduct} products={products}/>
};

let mapStateToProps = (state) => ({
    isAuth:state.loginPage.isAuth,
    products:state.productPage.products
});

export default compose(connect(mapStateToProps,{addProduct}),withAuthRedirect)(MarketContainer)