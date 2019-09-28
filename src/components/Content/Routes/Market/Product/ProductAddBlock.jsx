import React from 'react';
import "../../../../../assets/css/Product.css";
import {NavLink} from "react-router-dom";

export const ProductAddBlock = ({isAdded,addProductToCart,name,id,count}) => {

    return <div className="product__block" key={id}>
        <h4>{name}</h4>
        {!isAdded && <button className="add__btn" onClick={() => addProductToCart(id,name,count)}>Add to cart</button>}
        {isAdded && <NavLink to="/cart"><button className="add__btn" >Go to cart</button></NavLink>}
    </div>
}
;