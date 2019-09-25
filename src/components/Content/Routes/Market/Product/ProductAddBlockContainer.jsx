import React,{useState} from 'react';
import "../../../../../assets/css/Product.css";
import {ProductAddBlock} from "./ProductAddBlock";

export const ProductAddBlockContainer = (props) => {
        const [isAdded,setAdded] = useState(false);

        let addProductToCart = (id,name) =>{
            setAdded(true);
            props.addProduct({id,name})
        };

        return <ProductAddBlock {...props} addProductToCart={addProductToCart} isAdded={isAdded}/>
    };
