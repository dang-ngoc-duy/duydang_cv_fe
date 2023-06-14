import { PayloadAction } from "@reduxjs/toolkit";
import { fetchZingDataAlbum } from "app/features/zing-data-album/action";
import { fetchZingDataAudio } from "app/features/zing-data-audio/action";
import { IApiResponse } from "app/types/api";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDataXml } from "../models/api";
import { fetchZingDataXML, fetchZingDataXMLDone } from "./slice";

function* handleFetchZingDataXml(action: PayloadAction<string>) {
  try {
    const res: IApiResponse<string> = yield call(fetchDataXml, action.payload);

    if (res.success) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(res.data as string, "text/html");
      let dataXml = doc.body
        .querySelector("div[data-xml]")
        ?.getAttribute("data-xml") as string;
      let typeDta: string = action.payload.split("/")[3];

      if (dataXml && typeDta) {
        switch (typeDta) {
          case "album":
            yield put(fetchZingDataAlbum(dataXml));
            yield put(fetchZingDataXMLDone(res.data as string));
            break;
          case "bai-hat":
            yield put(fetchZingDataAudio(dataXml));
            yield put(fetchZingDataXMLDone(res.data as string));
            break;
          case "video-clip":
            console.log("🍌 ", dataXml, typeDta);
            yield put(fetchZingDataAudio(dataXml));
            yield put(fetchZingDataXMLDone(res.data as string));
            break;
        }
      }
    } else {
      yield put(fetchZingDataXMLDone(res.errors[0].msg));
    }
  } catch (e) {}
}

export default function* zingDataXmlSaga() {
  yield takeEvery(fetchZingDataXML, handleFetchZingDataXml);
}
