import { configureStore } from '@reduxjs/toolkit'
import authSlicer from './features/auth-slice'
import eventSlice from './features/event-slice'
// ...
export const store = configureStore({
    reducer: {
        auth: authSlicer,
        events: eventSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch