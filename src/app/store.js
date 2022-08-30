import { configureStore } from "@reduxjs/toolkit";
import { tagsReducer } from "../features/tags/tagsSlice";
import { videoReducer } from "../features/videos/videosSlice";

export const store = configureStore({
    reducer: {
        videos: videoReducer,
        tags: tagsReducer,
    },
});
