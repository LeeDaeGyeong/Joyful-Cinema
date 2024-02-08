import type { UserSliceType } from "@/types/userType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserSliceType = {
  userId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
