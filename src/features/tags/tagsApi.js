import { axiosIntance } from "../../utils/axios";

export const fetchTags = async () => (await axiosIntance.get("/tags")).data;
