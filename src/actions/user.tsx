import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, UserSignUp } from "@/interfaces/user";

export const setUserAsync = createAsyncThunk(
  "SET_USER",
  async (user: User): Promise<User> => {
    const response = await axios.post("/auth/signin", user);
    return response.data;
  }
);

export const addUserAsync = createAsyncThunk(
  "ADD_USER",
  async (user: UserSignUp): Promise<UserSignUp> => {
    const response = await axios.post("/auth/signup", user);
    return response.data;
  }
);
