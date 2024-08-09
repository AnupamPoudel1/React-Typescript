import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './learnings/09-reduxtoolkit/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
