import { axiosIntance } from "../../utils/axios";

export const fetchVideos = async () => (await axiosIntance.get("/videos")).data;
