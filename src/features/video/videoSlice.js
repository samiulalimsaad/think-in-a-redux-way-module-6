import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideo } from "./videoApi";

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const getVideo = createAsyncThunk(
    "video/fetchVideo",
    async (id) => await fetchVideo(id)
);

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getVideo.pending, (state) => {
                state.isLoading = true;
                state.video = {};
                state.isError = false;
                state.error = "";
            })
            .addCase(getVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(getVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error.message;
            }),
});

export const videoReducer = videoSlice.reducer;
