import React from 'react';
import {ProductAddBlockContainer} from "./Product/ProductAddBlockContainer.jsx";

export const MarketPage = ({products,addProduct}) => {

    return <main>
        <div>
            <h3>Market</h3>
            {
                products.map(p =>
                    <ProductAddBlockContainer {...p} addProduct={addProduct}/>)
            }
        </div>
    </main>
};
