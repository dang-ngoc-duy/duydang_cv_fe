import { PayloadAction } from "@reduxjs/toolkit";
import { IApiResponse } from "app/types/api";
import { ZingDataAlbum } from "app/types/ZingDataAlbum";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchZingDataAlbum, fetchZingDataAlbumFailure, fetchZingDataAlbumSuccess } from "./action";
import { fetchZingDtaAlbum } from "./api";

function* handleFetchZingDataAlbum (action: PayloadAction<string>) {
    try{
        const reponse: IApiResponse<ZingDataAlbum> = yield call(fetchZingDtaAlbum, action.payload);
        console.log('🍌 ~ DataAlbum ~ reponse', reponse)
        if(reponse.success){
            yield put(fetchZingDataAlbumSuccess(reponse.data as ZingDataAlbum));
        }else{
            yield put(fetchZingDataAlbumFailure(reponse.errors));
        }
    }catch(e){}
}

export default function* zingDtaAlbumSaga() {
    yield takeEvery(fetchZingDataAlbum.type, handleFetchZingDataAlbum)
}