import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRelatedVideos } from "./relatedVideosApi";

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const getRelatedVideos = createAsyncThunk(
    "relatedVideos/fetchRelatedVideos",
    async (params) => await fetchRelatedVideos(params)
);

const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getRelatedVideos.pending, (state) => {
                state.isLoading = true;
                state.relatedVideos = [];
                state.isError = false;
                state.error = "";
            })
            .addCase(getRelatedVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = action.payload;
            })
            .addCase(getRelatedVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = [];
                state.isError = true;
                state.error = action.error.message;
            }),
});

export const relatedVideosReducer = relatedVideosSlice.reducer;
