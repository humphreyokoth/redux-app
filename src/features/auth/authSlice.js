import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
isAuthenticated:!!user,
user:user ? user :null,
isLoading:false,
errorMessage:""

}

export const authSlice = createSlice({
    
})

