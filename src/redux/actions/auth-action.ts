import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axiosInstance';
import { authActionTypes } from '../action-types/auth-action-type';

export const loginUser = createAsyncThunk(
    authActionTypes.userLogin,
    async (user) => {
        const response = await axiosInstance.post('/api/v1/auth/login', user)
        return response.data
    }
);

export const createUser = createAsyncThunk(
    authActionTypes.userSignup,
    async (newUser) => {
        const response = await axiosInstance.post('/api/v1/auth/signup', newUser)
        return response.data
    })

















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