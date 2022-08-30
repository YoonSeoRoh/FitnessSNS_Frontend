import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../reducers/user";

export const setUserAsync = createAsyncThunk(
  "SET_USER",
  async (user: User): Promise<User> => {
    const response = await axios.get("/auth/signin");
    return response.data;
  }
);
