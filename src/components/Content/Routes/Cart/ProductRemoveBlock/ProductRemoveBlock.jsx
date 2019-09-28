import React from 'react';
import "./../../../../../assets/css/Product.css";

export const ProductRemoveBlock = ({id,name,removeProduct,count}) => {
    return <div className="product__block" key={id}>
        <h4>{name}</h4>
        <button className="add__btn" onClick={() => removeProduct({id,name,count})}>Remove to cart</button>
        <span>{count}</span>
    </div>
}
;