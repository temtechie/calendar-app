import { createSlice } from '@reduxjs/toolkit';
import { createEvent, getAllEvents } from '../actions/event-action';
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
                console.log("state.list = action.payload;", action.payload);

                state.message = action.payload.message;
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
                console.log("state.list = action.payload;", action.payload);
                state.loading = false;
                // state.list = action.payload;

                state.message = action.payload.message;
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.loading = false;
                console.log("rejected action", action);
                console.log("rejected action", action.payload);
            })
    },
});

export const { setUser } = eventSlice.actions;

export default eventSlice.reducer;
