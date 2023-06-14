import { ZingDataAlbumState } from "app/types/ZingDataAlbum";

export const initialState: ZingDataAlbumState = {
  fetching: false,
  fetched: false,
  data: {
    data: {
      items: [],
      is_vip: false,
      info: {
        id: "",
        link: "",
        title: "",
        name: "",
        isoffical: false,
        artists_names: "",
        artists: [],
        thumbnail: "",
        thumbnail_medium: "",
      },
      ip: "",
    },
  },
  error: [],
};
