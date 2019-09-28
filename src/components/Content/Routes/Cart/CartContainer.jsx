import React from 'react';
import {connect} from "react-redux";
import {decreaseProductCount, removeProduct} from "../../../../redux/product-reducer";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {CartPage} from "./CartPage.jsx";


const CartContainer = ({removeProduct,addedProducts,decreaseProductCount}) => {
    let removeProductFromCart = (product) =>{
        debugger
        if(product.count < 2){
            removeProduct(product.id)
        }else{
            decreaseProductCount(product)
        }
    }
    return <CartPage removeProduct={removeProductFromCart} addedProducts={addedProducts} />
};

let mapStateToProps = (state) => ({
    addedProducts:state.productPage.addedProducts
});

export default compose(connect(mapStateToProps,{removeProduct,decreaseProductCount}),withAuthRedirect)(CartContainer)