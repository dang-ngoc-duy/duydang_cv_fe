import { createSlice } from "@reduxjs/toolkit";
import { ZingDataAudioCase } from "./case";
import { initialState } from "./state";

const zingDataAudioSlice = createSlice({
  name: "zing-data-audio",
  initialState,
  reducers: {
    ...ZingDataAudioCase,
  },
});

// Actions
export const ZingDataAudioActions = zingDataAudioSlice.actions;

// Reducer
const ZingDataAudioReducer = zingDataAudioSlice.reducer;
export default ZingDataAudioReducer;
