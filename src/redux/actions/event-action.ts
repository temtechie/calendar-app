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

export const fetchSingleEvent = createAsyncThunk<any, any>(
    'events/fetchSingle',
    async (id) => {
        try {
            const response = await axiosInstance.get(`/event/${id}`);
            return response.data;
        } catch (error) {
            console.log("fetchSingleEvent error", error)
        }
    });
export const fetchEventsByStartDay = createAsyncThunk<any, any>(
    'events/fetchByStart',
    async (start) => {
        try {
            const response = await axiosInstance.get(`/event/events?start=${start}`);
            return response.data;
        } catch (error) {
            console.log("fetchEventsByStartDay error", error)
        }
    });

export const deleteEvent = createAsyncThunk<any, any>(
    'events/delete',
    async (eventId) => {
        try {
            const response = await axiosInstance.delete(`/event/${eventId}`);
            return response.data;
        } catch (error) {
            console.log("deleteEvent error", deleteEvent);
        }
    });

export const updateEvent = createAsyncThunk<any, any>(
    'events/update',
    async ({ eventId, eventData }) => {
        try {
            const response = await axiosInstance.put(`/event/${eventId}`, eventData);
            return response.data;
        } catch (error) {
            console.log("updateEvent error", error);
        }
    });
