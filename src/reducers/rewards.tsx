import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { getRewardAsync } from "../actions/rewards";

export interface RewardState {
  isLoading: boolean;
  data: {
    id: number;
    user_id: number;
    group_id: number;
    title: string;
    content: string;
    condition: number;
    end_date: string;
    total_user: number;
    created_at: string;
    updated_at: string;
    status: string;
  } | null;
}

const initialState: RewardState = {
  isLoading: false,
  data: null,
};

const rewardSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRewardAsync.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export default rewardSlice.reducer;

// export const {} = rewardSlice.actions;
// export const selectCount = (state: RootState) => state.rewards.value;
