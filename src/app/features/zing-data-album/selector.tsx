import { RootState } from "app/types/reducer";

export const getZingDataAlbum = (state: RootState) =>
  state.zingDataAlbum.data.data;
