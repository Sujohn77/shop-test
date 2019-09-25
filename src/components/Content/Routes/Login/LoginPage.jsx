import React from 'react'
import {Field} from "redux-form";
import {required} from "../../../../utils/validators/required";
import {Input} from "../../../common/FormCreator.jsx";
import {minLengthCreator} from "../../../../utils/validators/minLengthCreator";

let maxLength8 = minLengthCreator(8);

export const LoginForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="login"
                           placeholder="Input login"
                           component={Input}
                           validate={[required,maxLength8]}/>
                </div>
                <div>
                    <Field name="password"
                           placeholder="Input password"
                           component={Input}
                           validate={[required,maxLength8]}/>
                </div>
                <div>
                    <button className="submit">Submit</button>
                </div>
            </form>
};



