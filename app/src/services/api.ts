import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const apiKey: string = import.meta.env.VITE_API_KEY;
