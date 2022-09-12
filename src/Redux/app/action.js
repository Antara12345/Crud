import * as types from "./actionTypes";
import axios from "axios";
// const getBooksRequest=()=>{
//     return{
//         type:types.GET_BOOKS_REQUEST
//     };
// };

// const getBooksSuccess=(payload)=>{
//     return{
//         type:types.GET_BOOKS_SUCCESS,
//         payload
//     };
// }; 

// const getBooksFailure=()=>{
//     return{
//         type:types.GET_BOOKS_FAILURE
//         
//     };
// }; ///.................aise krty the pehle but ab jaise niche likhe h waise v kr skty h aur upar ka call krty the niche jo cmnt out kiye h....


const getBooks = (params) => (dispatch) => {
  // dispatch(getBooksRequest())
  dispatch({ type: types.GET_BOOKS_REQUEST })
  return axios.get("http://localhost:8000/books",params).then(r => {
    dispatch({ type: types.GET_BOOKS_SUCCESS, payload: r.data })
  }).catch(e => {
    dispatch({ type: types.GET_BOOKS_FAILURE, payload: e });
  });
};
//for edit update
const  updateBook=(id,payload)=>dispatch=>{
  dispatch({type:types.PATCH_BOOK_REQUEST});
  return axios.patch(`http://localhost:8000/books/${id}`,payload)
  .then(r=>{dispatch({type:types.PATCH_BOOK_SUCCESS, payload:r.data})}).catch(e=>{
    dispatch({type:types.PATCH_BOOK_FAILURE,payload:e});
  });

};

export { getBooks,updateBook };