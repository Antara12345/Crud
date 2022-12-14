import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth=({children})=>{
  const auth=useSelector((state)=>state.AuthReducer.isAuth);
   const location=useLocation();

//    console.log(location);
  if(!auth){
    return <Navigate to="/login" replace 
    state={{data:location.pathname}}/>;
  }
  return children;
}
export default RequireAuth;