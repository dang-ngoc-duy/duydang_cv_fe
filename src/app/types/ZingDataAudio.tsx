import { IError } from "./api";

export interface ZingDataAudioState {
    fetching: boolean;
    fetched: boolean;
    data: ZingDataAudio;
    error: IError[];
}
export interface ZingDataAudioResponse {
    id:            string;
    name:          string;
    title:         string;
    code:          string;
    content_owner: number;
    isoffical:     boolean;
    isWorldWide:   boolean;
    playlist_id:   string;
    artists:       ArtistElement[];
    artists_names: string;
    performer:     string;
    type:          string;
    link:          string;
    lyric:         string;
    thumbnail:     string;
    duration:      number;
    source:        { [key: string]: string };
    album:         Album;
    artist:        PurpleArtist;
    ads:           boolean;
    is_vip:        boolean;
    ip:            string;
}
export interface ZingDataAudio {
    data: ZingDataAudioResponse;
}

export interface Album {
    id:               string;
    link:             string;
    title:            string;
    name:             string;
    isoffical:        boolean;
    artists_names:    string;
    artists:          ArtistElement[];
    thumbnail:        string;
    thumbnail_medium: string;
}

export interface ArtistElement {
    name: string;
    link: string;
}

export interface PurpleArtist {
    id:        string;
    name:      string;
    link:      string;
    cover:     string;
    thumbnail: string;
}