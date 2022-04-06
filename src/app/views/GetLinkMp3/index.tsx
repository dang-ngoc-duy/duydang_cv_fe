import React, { useEffect, useRef, useState } from 'react'
import Box from 'app/components/layout/Box';
import Intro from 'app/components/layout/Intro';
import { Button } from '@mui/material';

import getLinkMp3Style from './styles';
import axios from 'axios';
import { ZingDataAlbum } from 'app/types/ZingDataAlbum';
import { ZingDataAudio } from 'app/types/ZingDataAudio';

const GetLinkMp3: React.FC = () => {
    const classes = getLinkMp3Style();
    const inputRef = useRef<HTMLInputElement>(null);
    const [dataAlbum, setDataAlbum] = useState<ZingDataAlbum | ZingDataAudio>();
    const [message, setMessage] = useState('');
    const [currType, setCurrType] = useState('');
    console.log('🍕 ~ file: index.tsx ~ line 17 ~ currType', currType)
    useEffect(() => {})
    const rawHTMLByUrl = async (url: string) => {
        const API = axios.create({
            baseURL: 'http://localhost:3000/',
            headers: { Accept: 'text/plain' },
            withCredentials: true
        });

        let rs = await API.request({url: url, method: 'GET'})
            .then(res => {
                let parser = new DOMParser();
                return parser.parseFromString(res.data, 'text/html');
            })
        return rs;
    }

    const fetchZingMp3Data = async (url: string) => {
        let endPoint = 'https://mp3.zing.vn/xhr';
        let type = url.split('?')[1].split('&')[0].replace('type=','').trim();
        type && setCurrType(type);
        const API = axios.create({
            baseURL: 'http://localhost:3000/',
            headers: { Accept: '*/*' },
            withCredentials: true
        });

        let rs = await API.request({url: endPoint+url, method: 'GET'})
            .then(res => {
                if(type === 'album') { return res.data.data as ZingDataAlbum } 
                if(type === 'audio') { return res.data.data as ZingDataAudio }
            })
        return rs;
    }

    const handleGetLink = async () => {
        if(inputRef.current){
            let newurl = inputRef.current.value.replace('zingmp3','mp3.zing');
            if(newurl === '') {
                setMessage('Vui lòng dán link vào ô tìm kiếm'); 
                return
            };

            await rawHTMLByUrl(newurl).then(async doc => {
                let dataXml = doc.body.querySelector('div[data-xml]')?.getAttribute('data-xml') as string;
                await fetchZingMp3Data(dataXml).then(data => {
                    setMessage(''); 
                    if(currType === 'album'){setDataAlbum(data as ZingDataAlbum)}
                    if(currType === 'audio'){setDataAlbum(data as ZingDataAudio)}
                }).catch(() => setMessage('Không tìm thấy hoặc định dạng link ko đúng'))
            }).catch(() => setMessage('Không tìm thấy hoặc định dạng link ko đúng'))
        }
    }

    return (
        <div className='container gutter-top'>
            <Box>
                <Intro title='Get Link Mp3'>
                    <input
                        ref={inputRef}
                        placeholder={'Dán link vào đây...'}
                        className={classes.Input}
                    />
                    <label className='mt-1 text-warning'>{message}</label><br/>
                    <Button
                        onClick={handleGetLink}
                        variant='contained'
                        className={classes.Button}
                        color='primary'
                    >
                        Get link
                    </Button>
                </Intro>
            </Box>
            {(currType === 'album' || currType === 'audio') && (
                <Box className='mt-1'>
                    {currType === 'album' && (dataAlbum !== undefined) && (dataAlbum as ZingDataAlbum)?.items?.map((song, idx) => (
                        <div key={idx} className={classes.Song}>
                            <img className='image' src={song?.thumbnail}/>
                            <div className='info'> 
                                <label className='title'>{song?.title}</label>
                                <span className='artist'>{song?.artists_names}</span>
                            </div>
                            <Button
                                variant='outlined'
                                className='btn-download'
                                color='primary'
                            >
                                Download
                            </Button>
                        </div>
                    ))}
                    {currType === 'audio' && (dataAlbum !== undefined) && (
                            <div className={classes.Song}>
                            <img className='image' src={(dataAlbum as ZingDataAudio)?.thumbnail}/>
                            <div className='info'> 
                                <label className='title'>{(dataAlbum as ZingDataAudio)?.title}</label>
                                <span className='artist'>{(dataAlbum as ZingDataAudio)?.artists_names}</span>
                            </div>
                            <Button
                                variant='outlined'
                                className='btn-download'
                                color='primary'
                            >
                                Download
                            </Button>
                        </div>
                    )}
                </Box>
            )}
        </div>
    )
}

export default GetLinkMp3;