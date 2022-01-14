import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "redux/store";

export interface IInitState {
  init: boolean;
}

const initialState: IInitState = {
  init: false,
};

const slice = createSlice({
  name: "slice",

  initialState,

  reducers: {
    setInit(state, { payload }) {
      state.init = true;
    },
    extraReducers: (builder) => {
      // builder.addCase(apiRequest.pending, (state) => {
      //   console.log("req");
      // });
    },
    // extraReducers: {
    // [HYDRATE]: (state, action) => {
    //   console.log("HYDRATE", action.payload);
    //   return {
    //     ...state,
    //     ...action.payload.subject,
    //   };
    // },
    // },
  },
});
export const { setInit } = slice.actions;
export const selectSlice = (state: RootState) => state.sliceReducer;

export default slice.reducer;
