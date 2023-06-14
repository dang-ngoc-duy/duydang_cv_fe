import { ZingDataAlbumState } from './ZingDataAlbum';
import { ZingDataAudioState } from './ZingDataAudio';
import { ZingDataXmlState } from './ZingDataXml';

export interface RootState {
  zingDataAlbum: ZingDataAlbumState;
  zingDataAudio: ZingDataAudioState;
  zingDataXml: ZingDataXmlState;
}
