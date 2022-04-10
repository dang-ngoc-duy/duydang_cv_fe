import zingDataXmlSaga from "app/features/raw-src/store/saga";
import zingDtaAlbumSaga from "app/features/zing-data-album/saga";
import zingDtaAudioSaga from "app/features/zing-data-audio/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    zingDataXmlSaga(),
    zingDtaAlbumSaga(),
    zingDtaAudioSaga(),
  ]);
}
