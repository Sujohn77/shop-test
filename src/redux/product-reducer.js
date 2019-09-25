const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

let initialState = {
    products:[
        {id:1,name:"BMW white"},
        {id:2,name:"SUZUKI red"},
        {id:3,name:"Impala black"},
        {id:4,name:"BM5 blue"},
        {id:5,name:"Land Rover 2012"},
    ],
    addedProducts:[]
};

export const productReducer = (state = initialState, action ) => {
    switch(action.type){
        case ADD_PRODUCT:
            return {
                ...state,
                addedProducts: [...state.addedProducts,action.product]
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                addedProducts: [...state.addedProducts.filter(p => p.id !== action.productId).map(p => p)]
            };
        default: return state;
    }
};

export let addProduct = (product) =>({type: ADD_PRODUCT,product});
export let removeProduct = (productId) =>({type: REMOVE_PRODUCT,productId});