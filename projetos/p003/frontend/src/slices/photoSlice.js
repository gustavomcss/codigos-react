// Import React Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Import Method Functions from photoService
import photoService from '../services/photoService';

// Create Initial State for Auth Slice + Control Flags to Manage
const initialState = {
    photos: [],
    photo: {},
    error: false,
    sucess: false,
    loading: false,
    message: null
};

// PHOTO: Publish
export const publish = createAsyncThunk("photo/publish",
    async (photo, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await photoService.publishPhoto(photo, token);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

// PHOTO: Get User Photos
export const getUserPhotos = createAsyncThunk("photo/userphotos",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await photoService.getUserPhotos(id, token);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

// PHOTO: Delete Photo
export const deletePhoto = createAsyncThunk("photo/delete",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await photoService.deletePhoto(id, token);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
)

// PHOTO: Update Photo
export const updatePhoto = createAsyncThunk("photo/update",
    async (photoData, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await photoService.updatePhoto(photoData.id, { title: photoData.title }, token);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

// PHOTO: Get By ID
export const getPhoto = createAsyncThunk("photo/getphoto",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await photoService.getPhoto(id, token);

        return data;
    }
);

// PHOTO: Like Photo
export const likePhoto = createAsyncThunk("photo/like",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await photoService.likePhoto(id, token);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

// PHOTO: Comment Photo
export const commentPhoto = createAsyncThunk("photo/comment",
    async (commentData, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await photoService.commentPhoto(commentData.id, { comment: commentData.comment }, token);

        // Check for Errors
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

// PHOTO: Get All
export const getPhotos = createAsyncThunk("photo/getall",
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await photoService.getPhotos(token);

        return data;
    }
);

// PHOTO: Get Photo by Query
export const searchPhotos = createAsyncThunk("photo/search",
    async (query, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;
        const data = await photoService.searchPhotos(query, token);

        return data;
    }
);

export const photoSlice = createSlice({
    name: "photo",
    initialState: initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(publish.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(publish.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.photo = action.payload;
                state.photos.unshift(state.photo);
                state.message = "Photo Published Successfully!";
            })
            .addCase(publish.rejected, (state, action) => {
                state.error = action.payload;
                state.sucess = false;
                state.loading = false;

                state.photo = {};
            })

            .addCase(getUserPhotos.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(getUserPhotos.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.photos = action.payload;
            })

            .addCase(deletePhoto.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(deletePhoto.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.photos = state.photos.filter((photo) => {
                    return photo._id !== action.payload._id;
                })
                state.message = action.payload.message;
            })
            .addCase(deletePhoto.rejected, (state, action) => {
                state.error = action.payload;
                state.sucess = false;
                state.loading = false;

                state.photo = {};
            })

            .addCase(updatePhoto.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(updatePhoto.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.photos.map((photo) => {
                    if (photo._id === action.payload.photo._id) {
                        return photo.title = action.payload.photo.title;
                    }
                    return photo;
                })
                state.message = action.payload.message;
            })
            .addCase(updatePhoto.rejected, (state, action) => {
                state.error = action.payload;
                state.sucess = false;
                state.loading = false;

                state.photo = {};
            })

            .addCase(getPhoto.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(getPhoto.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.photo = action.payload;
            })

            .addCase(likePhoto.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                if (state.photo.likes) {
                    state.photo.likes.push(action.payload.userId);
                }

                state.photos.map((photo) => {
                    if (photo._id === action.payload.photoId) {
                        return photo.likes.push(action.payload.userId);
                    }
                })

                state.message = action.payload.message;
            })
            .addCase(likePhoto.rejected, (state, action) => {
                state.error = action.payload;
                state.sucess = false;
                state.loading = false;
            })
            
            .addCase(commentPhoto.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.photo.comments.push(action.payload.comment);

                state.message = action.payload.message;
            })
            .addCase(commentPhoto.rejected, (state, action) => {
                state.error = action.payload;
                state.sucess = false;
                state.loading = false;
            })
            
            .addCase(getPhotos.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.photos = action.payload;
            })
            
            .addCase(searchPhotos.pending, (state) => {
                state.error = false;
                state.sucess = false;
                state.loading = true;
            })
            .addCase(searchPhotos.fulfilled, (state, action) => {
                state.error = null;
                state.sucess = true;
                state.loading = false;

                state.photos = action.payload;
            });
    }
});

export const { resetMessage } = photoSlice.actions;

export default photoSlice.reducer;