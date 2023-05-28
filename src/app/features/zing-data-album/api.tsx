import { ZingDataAlbum } from "app/types/ZingDataAlbum";
import { apiGet } from "app/utils/api";
import { API_FETCH_ZING_DATA_ALBUM } from "./ApiPaths";

export const fetchZingDtaAlbum = (params: string) => {
    return apiGet<ZingDataAlbum>(API_FETCH_ZING_DATA_ALBUM+params);
};