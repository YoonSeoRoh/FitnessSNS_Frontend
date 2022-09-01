import { configureStore } from "@reduxjs/toolkit";
import rewardSlice from "./rewards";
import userSlice from "./user";

export const store = configureStore({
  reducer: {
    rewards: rewardSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
