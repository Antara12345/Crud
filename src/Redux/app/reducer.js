import * as types from "./actionTypes"

const initialState={
    books:[],
    isLoading:false,
    isError:false,
}

const reducer=(oldstate=initialState,action)=>{
    const {type,payload}=action;
    switch(type){

        case types.GET_BOOKS_REQUEST:
        return{
            ...oldstate,
            isLoading:true
        }
        
        case types.GET_BOOKS_SUCCESS:
        return{
            ...oldstate,
            isLoading:false,
            books:payload,
            isError:false
        }

        case types>types.GET_BOOKS_FAILURE:
        return{
            ...oldstate,
            isLoading:false,
            books:[],
            isError:true
        }

        default:
        return oldstate
    }

}

export {reducer}