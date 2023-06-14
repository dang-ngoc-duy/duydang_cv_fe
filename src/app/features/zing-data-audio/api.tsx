import { ZingDataAudio } from 'app/types/ZingDataAudio';
import { apiGet } from 'app/utils/api';
import { API_FETCH_ZING_DATA_AUDIO } from './ApiPaths';

export const fetchZingDtaAudio = (params: string) => {
  console.log(API_FETCH_ZING_DATA_AUDIO + params);
  return apiGet<ZingDataAudio>(API_FETCH_ZING_DATA_AUDIO + params);
};
