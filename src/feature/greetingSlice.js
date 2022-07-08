/* eslint-disable */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GREETING_URL = "http://127.0.0.1:3000/api/v1/greeting";

export const getGreeting = createAsyncThunk("greeting/getGreeting", async () => {
  const response = await axios.get(GREETING_URL);
  return response.data;
});



const initialState = {
  greeting: [],
  status: "idle",
  error: null,
};

const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {
    greetingAdded: {
      reducer(state, action) {
        state.greeting.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getGreeting.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.greeting = action.payload;
      })
      .addCase(getGreeting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

  },
});

export const { greetingAdded } = greetingSlice.actions;

export const selectAllGreeting = (state) => state.greeting.greeting;
export const getGreetingStatus = (state) => state.greeting.status;


export default greetingSlice.reducer;
