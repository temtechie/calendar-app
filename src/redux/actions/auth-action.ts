import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axiosInstance';

interface UserData {
    email: string;
    password: string;
}


export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/user/register', userData);
            return response.data;
        } catch (error) {
            console.log("registerUser error:", error);
            return rejectWithValue(error);
        }
    }
);
export const loginUser = createAsyncThunk<any, UserData>(
    'user/login',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/user/login', userData);
            return response.data;
        } catch (error) {
            console.log("loginUser error:", error);
            return rejectWithValue(error);
        }
    }
);

















// const authSliceExtraReducers = {
//     [loginUser.pending]: (state) => {
//         state.loading = true;
//         state.error = null;
//     },
//     [loginUser.fulfilled]: (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//     },
//     [loginUser.rejected]: (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//     },
// };