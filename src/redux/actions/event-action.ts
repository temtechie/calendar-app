import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axios/axiosInstance';


export const getAllEvents = createAsyncThunk(
    'event/fetchAll',
    async () => {
        try {
            const response = await axiosInstance.get('/event/all');
            return response.data;

        } catch (error) {
            console.log("getAllEvents error:", error);
        }
    }
);

export const createEvent = createAsyncThunk<any, any>(
    'event/create',
    async (eventData) => {
        try {
            const response = await axiosInstance.post('/event/create', eventData);
            return response.data;

        } catch (error) {
            console.log("getAllEvents error:", error);
        }
    },
);
