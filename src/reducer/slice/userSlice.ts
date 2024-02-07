import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
