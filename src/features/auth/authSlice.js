import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
isAuthenticated:!!user,
user:user ? user :null,
isLoading:false,
errorMessage:"",

}

const authLogin = async (userData)=> {
    const res = await fetch("",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(userData),
    });
const resData = await res.json();
if(!resData.access_token){
throw new Error(resData.message);
}
localStorage.setItem("user",JSON.stringify(resData.user));
localStorage.setItem("access_token",resData.access_token);
localStorage.setItem("refresh_token",resData.refresh_token);
return resData;
}
export const authSlice = createSlice({
    
})

const authLogout = () => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    fetch("http://localhost:5000/api/v1/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          fetch("http://localhost:5000/api/v1/auth/logout/refresh", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${refresh_token}`,
            },
          })
            .then((res) => {
              if (res.status === 500) {
                localStorage.clear();
                // window.location.href = "/login";
              }
            })
            .catch((err) => {
              return err;
            });
        }
      })
      .catch((err) => {
        return err;
      });
  };
  

