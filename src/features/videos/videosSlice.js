import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "./videosApi";

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const getVideos = createAsyncThunk(
    "videos/fetchVideos",
    async () => await fetchVideos()
);

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getVideos.pending, (state) => {
                state.isLoading = true;
                state.videos = [];
                state.isError = false;
                state.error = "";
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(getVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error.message;
            }),
});

export const videoReducer = videoSlice.reducer;
