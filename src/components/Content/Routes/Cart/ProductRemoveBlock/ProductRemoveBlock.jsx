import React from 'react';
import "./../../../../../assets/css/Product.css";

export const ProductRemoveBlock = ({id,name,removeProduct}) => {
    return <div className="product__block" key={id}>
        <h4>{name}</h4>
        <button className="add__btn" onClick={() => removeProduct(id)}>Remove to cart</button>
    </div>
}
;