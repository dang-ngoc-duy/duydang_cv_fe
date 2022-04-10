import { IApiResponse } from "app/types/api";
import { ZingDataAlbum } from "app/types/ZingDataAlbum";
import { formatPath } from "app/utils";
import { apiGet } from "app/utils/api";
import { API_FETCH_ZING_DATA_ALBUM } from "./ApiPaths";

export const fetchZingDtaAlbum = (params: string) => {
    return apiGet<ZingDataAlbum>(API_FETCH_ZING_DATA_ALBUM+params);
};