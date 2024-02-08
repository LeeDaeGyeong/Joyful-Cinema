import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { MovieSlice } from "./slice/movieSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  movie: MovieSlice.reducer,
});
