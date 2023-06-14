import { PayloadAction } from '@reduxjs/toolkit';
import { IError } from 'app/types/api';
import { ZingDataAlbum, ZingDataAlbumState } from 'app/types/ZingDataAlbum';

export const ZingDataAlbumCase = {
  fetchZingDataAlbum: (
    state: ZingDataAlbumState,
    action: PayloadAction<string>
  ) => {
    state.fetching = true;
    state.fetched = false;
  },
  fetchZingDataAlbumSuccess: (
    state: ZingDataAlbumState,
    action: PayloadAction<ZingDataAlbum>
  ) => {
    state.fetching = false;
    state.fetched = true;
    state.data = action.payload;
  },
  fetchZingDataAlbumFailure: (
    state: ZingDataAlbumState,
    action: PayloadAction<IError[]>
  ) => {
    state.fetching = true;
    state.fetched = false;
    state.error = action.payload;
  },
};
