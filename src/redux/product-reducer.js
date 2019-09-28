const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const INSCRESE_PRODUCT_COUNT = "INSCRESE_PRODUCT_COUNT";
const DECREASE_PRODUCT_COUNT = "DECREASE_PRODUCT_COUNT";

let initialState = {
    products:[
        {id:1,name:"BMW white",count:1},
        {id:2,name:"SUZUKI red",count:1},
        {id:3,name:"Impala black",count:1},
        {id:4,name:"BM5 blue",count:1},
        {id:5,name:"Land Rover 2012",count:1},
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

        case INSCRESE_PRODUCT_COUNT:
            let newProduct = state.addedProducts.find((item) => item.id === action.productId);
            newProduct.count += 1;
            return {
                ...state,
                addedProducts: [...state.addedProducts.map(p => {
                    if(p.id === action.productId) return newProduct;
                    return p
                })]
            };

        case REMOVE_PRODUCT:
            return {
                ...state,
                addedProducts: [...state.addedProducts.filter(p => p.id !== action.productId)]
            };

        case DECREASE_PRODUCT_COUNT:
            action.product.count -= 1;
            return {
                ...state,
                addedProducts: [...state.addedProducts.map(p => {
                    if(p.id === action.product.id) return action.product;
                    return p
                })]
            };
        default: return state;
    }
};

export let addProduct = (product) =>({type: ADD_PRODUCT,product});
export let addSameProduct = (productId) => ({type: INSCRESE_PRODUCT_COUNT,productId});
export let removeProduct = (productId) =>({type: REMOVE_PRODUCT,productId});
export let decreaseProductCount = (product) =>({type: DECREASE_PRODUCT_COUNT,product});