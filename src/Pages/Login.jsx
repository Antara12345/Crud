import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../Redux/auth/action";


function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    // console.log("inside login",location);
    const comingFrom=location.state?.data||"/"

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(email && password){
           dispatch(login({email,password})).then((r)=>{
            //  console.log("buhhh",r)
            navigate(comingFrom,{replace:true});
           });
        }
    };

    return(
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div>
                    <label>User Password</label>
                    <input type="password" value={password}
                     onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">LOGIN</button>
            </form>
            </FormWrapper>
        
    )
}
export default Login;

const FormWrapper=styled.div`

display:flex;
l=flex-direction:column;
width:300px;
align-items:center;
margin:auto;


// div{
//     border:1px solid orange;
//     width:100%;
// }

// label{
//     width:150px;
// }
`;