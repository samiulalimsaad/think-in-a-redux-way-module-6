import { axiosIntance } from "../../utils/axios";

export const fetchVideo = async (id) =>
    (await axiosIntance.get(`/videos/${id}`)).data;
