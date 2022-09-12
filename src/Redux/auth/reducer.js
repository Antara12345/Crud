import * as types from "./actionTypes"

const initialState={
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isAuthError:false,
}

const reducer=(oldstate=initialState,action)=>{
    const {type,payload}=action;
    switch(type){

        case types.USER_LOGIN_REQUEST:
        return{
            ...oldstate,
            isAuthLoading:true
        }
        
        case types.USER_LOGIN_SUCCESS:
        return{
            ...oldstate,
            isAuthLoading:false,
            isAuth:true,
            token:payload,
            
        }

        case types.USER_LOGIN_FAILURE:
        return{
            ...oldstate,
            isAuthLoading:false,
           isAuth:false,
            isAuthError:true,
            token:[]
        }

        default:
        return oldstate
    }

}

export {reducer}