import { loginReducer } from "./login-reducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer as formReducer} from 'redux-form';

import thunkMiddleware from "redux-thunk";
import {productReducer} from "./product-reducer";

let reducers = combineReducers({
    loginPage:loginReducer,
    form:formReducer,
    productPage:productReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;