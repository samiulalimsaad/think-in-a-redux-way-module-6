import { axiosIntance } from "../../utils/axios";

export const fetchVideos = async ({ tags, search }) => {
    const limit = 10;

    let query =
        tags?.length && tags?.map((tag) => `tags_like=${tag}`).join("&");
    query += `&q=${search}&_limit${limit}`;

    return (await axiosIntance.get(`/videos?${query}`)).data;
};
