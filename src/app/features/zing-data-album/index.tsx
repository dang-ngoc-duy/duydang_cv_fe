import { createSlice } from "@reduxjs/toolkit";
import { ZingDataAlbumCase } from "./case";
import { initialState } from "./state";

const zingDataAlbumSlice = createSlice({
  name: "zing-data-album",
  initialState,
  reducers: {
    ...ZingDataAlbumCase,
  },
});

// Actions
export const ZingDataAlbumActions = zingDataAlbumSlice.actions;

// Reducer
const ZingDataAlbumReducer = zingDataAlbumSlice.reducer;
export default ZingDataAlbumReducer;
