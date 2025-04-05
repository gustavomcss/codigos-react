// Import React Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import Reducer Slices
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});