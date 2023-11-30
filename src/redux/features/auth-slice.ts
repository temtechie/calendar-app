import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../actions/auth-action';
import { authState } from '../states';

const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = '';
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = '';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.token = action.payload.token;
                state.message = action.payload.message;
                localStorage.setItem('token', JSON.stringify(action.payload.token));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                console.log("rejected action", action.payload);
            });
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
