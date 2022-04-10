import { PayloadAction } from "@reduxjs/toolkit";
import { IApiResponse } from "app/types/api";
import { ZingDataAudio } from "app/types/ZingDataAudio";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchZingDataAudio, fetchZingDataAudioFailure, fetchZingDataAudioSuccess } from "./action";
import { fetchZingDtaAudio } from "./api";

function* handleFetchZingDataAudio (action: PayloadAction<string>) {
    console.log('🍌 ~ file: saga.tsx ~ line 9 ~ function*handleFetchZingDataAudio ~ action', action)
    try{
        const reponse: IApiResponse<ZingDataAudio> = yield call(fetchZingDtaAudio, action.payload);
        console.log('🍌 ~ DataAudio~ reponse', reponse)
        if(reponse.success){
            yield put(fetchZingDataAudioSuccess(reponse.data as ZingDataAudio));
        }else{
            yield put(fetchZingDataAudioFailure(reponse.errors));
        }
    }catch(e){}
}

export default function* zingDtaAudioSaga() {
    yield takeEvery(fetchZingDataAudio.type, handleFetchZingDataAudio)
}