import { ZingDataAudioState } from "app/types/ZingDataAudio";

export const initialState: ZingDataAudioState = {
    fetching: false,
    fetched: false,
    data: {
        data: {
            id: '',
            name: '',
            title: '',
            code: '',
            content_owner: 0,
            isoffical: false,
            isWorldWide: false,
            playlist_id: '',
            artists: [],
            artists_names: '',
            performer: '',
            type: '',
            link: '',
            lyric: '',
            thumbnail: '',
            duration: 0,
            source: {
                '': '',
            },
            album: {
                id: '',
                link: '',
                title: '',
                name: '',
                isoffical: false,
                artists_names: '',
                artists: [],
                thumbnail: '',
                thumbnail_medium: '',
            },
            artist: {
                id: '',
                name: '',
                link: '',
                cover: '',
                thumbnail: '',
            },
            ads: false,
            is_vip: false,
            ip: '',
        }
    },
    error: []
}