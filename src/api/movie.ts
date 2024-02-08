import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "./core";

const getPopularMovieList = createAsyncThunk("movie/popular", async () => {
  const res = await axiosInstance.get("/popular");
  return res.data;
});

export const MovieApi = {
  getPopularMovieList,
};
