// Import React Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Import Method Functions from userService
import userService from '../services/userService';

// Create Initial State for Auth Slice + Control Flags to Manage
const initialState = {
    user: {},
    error: false,
    sucess: false,
    loading: false,
    message: null
};

// USER: Profile
export const profile = createAsyncThunk("user/profile",
    async (user, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await userService.profile(user, token);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

// USER: Update Profile
export const updateProfile = createAsyncThunk("user/update",
    async (user, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await userService.updateProfile(user, token);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

// USER: Get User from ID
export const getUser = createAsyncThunk("user/get",
    async (id, thunkAPI) => {
        const data = await userService.getUser(id);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(profile.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(profile.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.user = action.payload;
            })

            .addCase(updateProfile.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;
                state.message = "User Update Successfully!"

                state.user = action.payload;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.error = action.payload;
                state.sucess = false;
                state.loading = false;

                state.user = {};
            })

            .addCase(getUser.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.user = action.payload;
            });
    }
});

export const { resetMessage } = userSlice.actions;

export default userSlice.reducer;