// Import React Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Import Method Functions from authService
import authService from '../services/authService';

// Get User from Local Storage
const user = JSON.parse(localStorage.getItem("user"));

// Create Initial State for Auth Slice + Control Flags to Manage
const initialState = {
    user: user ? user : null,
    error: false,
    sucess: false,
    loading: false
};

// USER: Register
export const register = createAsyncThunk("auth/register",
    async (user, thunkAPI) => {
        const data = await authService.register(user);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

// USER: Logout
export const logout = createAsyncThunk("auth/logout",
    async () => {
        await authService.logout();
    }
);

// USER: Login
export const login = createAsyncThunk("auth/login",
    async (user, thunkAPI) => {
        const data = await authService.login(user);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.error = false;
            state.success = false;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload;
                state.sucess = false;
                state.loading = false;

                state.user = null;
            })

            .addCase(logout.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.user = null;
            })

            .addCase(login.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
                state.sucess = false;
                state.loading = false;

                state.user = null;
            });
    }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;