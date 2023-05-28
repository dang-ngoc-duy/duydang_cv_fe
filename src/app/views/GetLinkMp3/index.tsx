import React, { useRef, useState } from 'react'
import Box from 'app/components/layout/Box';
import Intro from 'app/components/layout/Intro';
import { Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getZingDataAlbum } from 'app/features/zing-data-album/selector';
import { fetchZingDataXML } from 'app/features/raw-src/store/slice';
import { getZingDataAudio } from 'app/features/zing-data-audio/selector';
import getLinkMp3Style from './styles';
import { FaDownload } from 'react-icons/fa';

const GetLinkMp3: React.FC = () => {
    const classes = getLinkMp3Style();

    const inputRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState('');
    const [currType, setCurrType] = useState('');

    const dispatch = useDispatch();
    const zingDtaAlbum = useSelector(getZingDataAlbum);
    const zingDtaAudio = useSelector(getZingDataAudio);

    const handleGetLink = () => {
        if(inputRef.current){
            let newurl = inputRef.current.value.replace('zingmp3','mp3.zing');
            if(newurl !== ''){
                let urlType = newurl.split('/')[3];
                if(urlType){
                    setCurrType(urlType);
                    setMessage('')
                    dispatch(fetchZingDataXML(newurl));
                }else{
                    setMessage('Không tìm thấy hoặc định dạng link ko đúng');
                }
            }else{
                setMessage('Vui lòng dán link vào ô tìm kiếm'); 
            }
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
            {(currType !== '') && (
                <Box className={classes.SongList}>
                    {currType === 'album' && (zingDtaAlbum !== undefined) && zingDtaAlbum?.items?.map((song, idx) => (
                        <div key={idx} className={classes.Song}>
                            <img className='image' src={song?.thumbnail} alt='thumbnail'/>
                            <div className='info'> 
                                <label className='title'>{song?.title}</label>
                                <span className='artist'>{song?.artists_names}</span>
                            </div>
                            <a href={song.source['128']} target="_blank" rel="noopener noreferrer" download>
                                <IconButton disabled={!song.source['128']} className='btn-download' color="primary" aria-label="Tải về máy">
                                    <FaDownload size={36}/>
                                </IconButton>
                            </a>
                        </div>
                    ))}
                    {(currType === 'bai-hat' || currType === 'video-clip') && (zingDtaAudio !== undefined) && (
                        <div className={classes.Song}>
                            <img className='image' src={zingDtaAudio?.thumbnail} alt='thumbnail'/>
                            <div className='info'> 
                                <label className='title'>{zingDtaAudio?.title}</label>
                                <span className='artist'>{zingDtaAudio?.artists_names}</span>
                            </div>
                            <a href={zingDtaAudio.source['128']} target="_blank" rel="noopener noreferrer" download>
                                <IconButton disabled={!zingDtaAudio.source['128']} className='btn-download' color="primary" aria-label="Tải về máy">
                                    <FaDownload size={36}/>
                                </IconButton>
                            </a>
                        </div>
                    )}
                </Box>
            )}
        </div>
    )
}

export default GetLinkMp3;