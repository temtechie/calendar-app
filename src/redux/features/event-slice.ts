import { createSlice } from '@reduxjs/toolkit';
import { createEvent, fetchEventsByStartDay, fetchSingleEvent, getAllEvents } from '../actions/event-action';
import { eventState } from '../states';

const eventSlice = createSlice({
    name: 'event',
    initialState: eventState,
    reducers: {
        setUser: (state, action) => {
            // state.token = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllEvents.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = '';
            })
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(getAllEvents.rejected, (state, action) => {
                state.loading = false;
                console.log("rejected action", action.payload);
            })

            .addCase(createEvent.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = '';
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action?.payload?.data.message;
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.loading = false;
                console.log("rejected action", action?.payload);
            })


            .addCase(fetchEventsByStartDay.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = '';
            })
            .addCase(fetchEventsByStartDay.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchEventsByStartDay.rejected, (state, action) => {
                state.loading = false;
                console.log("rejected action", action?.payload);
            })


            .addCase(fetchSingleEvent.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.message = '';
            })
            .addCase(fetchSingleEvent.fulfilled, (state, action) => {
                state.loading = false;
                console.log("action.payload", action.payload);

                state.eventData = action.payload;
            })
            .addCase(fetchSingleEvent.rejected, (state, action) => {
                state.loading = false;
                console.log("rejected action", action?.payload);
            })
    },
});

export const { setUser } = eventSlice.actions;

export default eventSlice.reducer;
