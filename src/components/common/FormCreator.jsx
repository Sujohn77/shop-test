import React from "react";
import "./Form.css";

export const FormCreator = ({input, meta,...props}) =>{
    let hasError = (meta.error && meta.touched);
    return(
        <div >
            <div className={(hasError)? "error":null}>
                {props.children}
            </div>
            { hasError && <span className="error-text">{meta.error}</span> }
        </div>
    )
};

export const Input = (props) =>{
    const {input, meta,child,...restProps} = props;
    return <FormCreator {...props}><input  {...input} {...restProps} /></FormCreator>
};


