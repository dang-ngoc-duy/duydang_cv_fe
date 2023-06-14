import { RootState } from "app/types/reducer";

export const getZingDataAudio = (state: RootState) =>
  state.zingDataAudio.data.data;
