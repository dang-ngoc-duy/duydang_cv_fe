import { Divider, Grid, Paper, Typography } from '@mui/material';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import HomePageStyle from './style';

const HomePage: React.FC = () => {
    const classes = HomePageStyle();

    return (
        <>
            <Grid container spacing={4} className={classes.root}>
                <Grid item xs={12}>
                    <Paper className='box'>
                        <Grid container spacing={2.5}>
                            <Grid container spacing={2.5} className='header-left' item xs>
                                <Grid item xs className='avatar-container'>
                                    <Paper elevation={24} className='avatar'/>
                                </Grid>
                                <Grid container spacing={2.5} item xs>
                                    <Grid item xs={12}>
                                        <Typography variant='h4'>
                                            Duy Dang
                                        </Typography>
                                        <Typography variant='h5'>
                                            Developer
                                        </Typography>
                                    </Grid>
                                    <Grid justifyContent='flex-start' item xs={12}>
                                        <FiFacebook style={{marginRight: '15px'}} size={20}/>
                                        <FiLinkedin style={{marginRight: '15px'}} size={20}/>
                                        <FiInstagram style={{marginRight: '15px'}} size={20}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Divider orientation='vertical' sx={{borderColor: '#33363D'}}/>
                            </Grid>
                            <Grid container spacing={2.5} alignItems='center' textAlign='center' item xs className='header-right'>
                                <Grid item xs={6}>
                                    <Typography>
                                        EMAIL
                                    </Typography>
                                    <Typography>
                                        duydangit24@gmail.com
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>
                                        BIRTHDAY
                                    </Typography>
                                    <Typography>
                                        29 January, 1994
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>
                                        PHONE
                                    </Typography>
                                    <Typography>
                                        (+84) 90-2332-911
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>
                                        LOCATION
                                    </Typography>
                                    <Typography>
                                        HCM City
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className='box'>
                        Nav
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <Paper className='box'>
                        Content
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default HomePage;
