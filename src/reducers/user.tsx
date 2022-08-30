import { createSlice } from "@reduxjs/toolkit";
import { setUserAsync } from "../actions/user";
import { User } from "@/interfaces/user";

const initialState: User = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUserAsync.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export default userSlice.reducer;
