import React,{useState} from 'react';
import "../../../../../assets/css/Product.css";
import {ProductAddBlock} from "./ProductAddBlock";

export const ProductAddBlockContainer = (props) => {
        const [isAdded,setAdded] = useState(false);

        let addProductToCart = (id,name,count) =>{
            setAdded(true);
            props.addProduct({id,name,count})
        };

        return <ProductAddBlock {...props} addProductToCart={addProductToCart} isAdded={isAdded}/>
    };
