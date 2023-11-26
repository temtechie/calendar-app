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
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload;
                localStorage.setItem('token', JSON.stringify(action.payload));
            })
            .addCase(loginUser.rejected, (state,) => {
                state.loading = false;
                // state.error = action?.error;
            });
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
