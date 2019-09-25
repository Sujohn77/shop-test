import React from 'react';
import {connect} from "react-redux";
import {removeProduct} from "../../../../redux/product-reducer";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {CartPage} from "./CartPage.jsx";


const CartContainer = ({removeProduct,addedProducts}) => {
    return <CartPage removeProduct={removeProduct} addedProducts={addedProducts} />
};

let mapStateToProps = (state) => ({
    addedProducts:state.productPage.addedProducts
});

export default compose(connect(mapStateToProps,{removeProduct}),withAuthRedirect)(CartContainer)