import { axiosIntance } from "../../utils/axios";

export const fetchRelatedVideos = async ({ tags, id }) => {
    const limit = 10;
    let query = tags?.length
        ? tags?.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${id}&_limit${limit}`
        : `&id_ne=${id}&_limit${limit}`;
    return (await axiosIntance.get(`/videos?${query}`)).data;
};
