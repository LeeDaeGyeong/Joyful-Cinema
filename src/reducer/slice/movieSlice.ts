import { MovieApi } from "@/api/movie";
import type { MovieSliceType } from "@/types/movieType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: MovieSliceType = {
  movieList: [],
  status: null,
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(MovieApi.getPopularMovieList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(MovieApi.getPopularMovieList.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.movieList = action.payload;
    });
    builder.addCase(MovieApi.getPopularMovieList.pending, (state) => {
      state.status = "failed";
    });
  },
});
