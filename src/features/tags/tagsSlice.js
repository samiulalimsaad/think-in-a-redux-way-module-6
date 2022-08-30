import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTags } from "./tagsApi";

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const getTags = createAsyncThunk(
    "tags/fetchTags",
    async () => await fetchTags()
);

const tagsSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getTags.pending, (state) => {
                state.isLoading = true;
                state.tags = [];
                state.isError = false;
                state.error = "";
            })
            .addCase(getTags.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tags = action.payload;
            })
            .addCase(getTags.rejected, (state, action) => {
                state.isLoading = false;
                state.tags = [];
                state.isError = true;
                state.error = action.error.message;
            }),
});

export const tagsReducer = tagsSlice.reducer;
