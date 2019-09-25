const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH = "SET_AUTH";

let initialState = {
    data:{
        login:null,
        password:null
    },
    isAuth:false
};

export const loginReducer = (state = initialState, action ) => {
    switch(action.type){
        case SET_USER_DATA:
                return {
                    ...state,
                    data: action.data
                };
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            };
        default: return state;
    }
};
export let setLocalUserData = (login,password) => (dispatch) =>{
    localStorage.setItem("userData",JSON.stringify({login:login,password:password}));

    dispatch(logIn(login,password));
    dispatch(setAuth(true));
};
export let getLocalUserData = () => (dispatch) =>{
    let userData = JSON.parse(localStorage.getItem("userData"));

    if(userData){
        dispatch(logIn(userData.login,userData.password));
        dispatch(setAuth(true));
    }
};
export let logIn = (login,password) =>({type: SET_USER_DATA,data:{login,password}});
let setAuth = (isAuth) =>({type: SET_AUTH,isAuth});
