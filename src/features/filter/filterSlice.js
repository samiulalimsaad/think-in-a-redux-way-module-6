import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: [],
    search: "",
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const index = state.tags.indexOf(action.payload);
            index >= 0 && state.tags.splice(index, 1);
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const filterActions = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
