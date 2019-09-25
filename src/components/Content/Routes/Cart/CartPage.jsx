import React from 'react';
import {ProductRemoveBlock} from "./ProductRemoveBlock/ProductRemoveBlock.jsx";

export const CartPage = ({addedProducts,removeProduct}) => {
    return <main>
        <div>
            <div>
                <h3>Cart</h3>
                {(addedProducts.length > 0) ?
                    addedProducts.map(p =>
                        <ProductRemoveBlock {...p} removeProduct={removeProduct}/>) :

                    <div>Nothing added to cart</div>
                }
            </div>
        </div>
    </main>
}
