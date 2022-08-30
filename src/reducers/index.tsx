import { configureStore } from "@reduxjs/toolkit";
import rewardSlice from "./rewards";

export const store = configureStore({
  reducer: {
    rewards: rewardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
