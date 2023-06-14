import { AnyAction, ReducersMapObject } from "@reduxjs/toolkit";
import ZingDataXMLReducer from "app/features/raw-src/store/slice";
import ZingDataAlbumReducer from "app/features/zing-data-album";
import ZingDataAudioReducer from "app/features/zing-data-audio";
import { RootState } from "app/types/reducer";

const reducer: ReducersMapObject<RootState, AnyAction> = {
  zingDataAlbum: ZingDataAlbumReducer,
  zingDataAudio: ZingDataAudioReducer,
  zingDataXml: ZingDataXMLReducer,
};
export default reducer;
