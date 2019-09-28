import React from 'react';
import {connect} from "react-redux";
import {MarketPage} from "./MarketPage.jsx";
import {addProduct, addSameProduct} from "../../../../redux/product-reducer";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";


const MarketContainer = ({products,addedProducts,addProduct,addSameProduct}) => {
    let addProductToCart = (product) =>{
        if(addedProducts.find((item) => {return item.id === product.id }))
        {
            addSameProduct(product.id)
        }
        else{
            addProduct(product)
        }
    };
    return <MarketPage addProduct={addProductToCart} products={products}/>
};

let mapStateToProps = (state) => ({
    isAuth:state.loginPage.isAuth,
    products:state.productPage.products,
    addedProducts:state.productPage.addedProducts
});

export default compose(connect(mapStateToProps,{addProduct,addSameProduct}),withAuthRedirect)(MarketContainer)