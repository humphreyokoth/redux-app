import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
isAuthenticated:!!user,
user:user ? user :null,
isLoading:false,
errorMessage:"",

}

const authLogin = async (userData)=> {
    const res = await fetch ("http://localhost:5000/api/v1/auth/login",{
    method:"POST",
    headers:{
        "COntent-Type":"application/json",
    },
    bpdy:JSON.stringify(userData),
    });
const resData = await res.json();
if(!resData.access_token){
throw new Error(resData.message);
}
localStorage.setItem("user",JSON.stringify(resData.uset));
localStorage.setItem("access_token",resData.access_token);
localStorage.setItem("refresh_token",resData.refresh_token);
return resData;
}
export const authSlice = createSlice({
    
})

