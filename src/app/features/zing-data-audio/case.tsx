import { PayloadAction } from "@reduxjs/toolkit";
import { IError } from "app/types/api";
import { ZingDataAudio, ZingDataAudioState } from "app/types/ZingDataAudio";

export const ZingDataAudioCase = {
  fetchZingDataAudio: (
    state: ZingDataAudioState,
    action: PayloadAction<string>
  ) => {
    console.log("🍌 ~ file: case.tsx ~ line 7 ~ action", action);
    state.fetching = true;
    state.fetched = false;
  },
  fetchZingDataAudioSuccess: (
    state: ZingDataAudioState,
    action: PayloadAction<ZingDataAudio>
  ) => {
    state.fetching = false;
    state.fetched = true;
    state.data = action.payload;
  },
  fetchZingDataAudioFailure: (
    state: ZingDataAudioState,
    action: PayloadAction<IError[]>
  ) => {
    state.fetching = true;
    state.fetched = false;
    state.error = action.payload;
  },
};
