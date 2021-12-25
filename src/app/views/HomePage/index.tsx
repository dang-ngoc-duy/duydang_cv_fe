// import { Divider, Grid, Paper, Typography } from '@mui/material';
import Header from 'app/components/layout/Header';
import Sidebar from 'app/components/layout/Sidebar';
// import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
// import HomePageStyle from './style';

const HomePage: React.FC = () => {
    //const classes = HomePageStyle();

    return (
        <>
            <div className="container gutter-top">
                <Header/>
                <div className="row sticky-parent">
                    <Sidebar/>
                    <div className="col-12 col-md-12 col-lg-10">
                        <div className="box box-content">
                            Content
                            {/* <div className="pb-0 pb-sm-2">
                            <h1 className="title title--h1 first-title title__separate">About Me</h1>
                            <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
                                media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                            <p>My job is to build your website so that it is functional and user-friendly but at the same time
                                attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy
                                to use. My aim is to bring across your message and identity in the most creative way. I created web
                                design for many famous brand companies.</p>
                            </div>
                            <div className="mt-1">
                            <h2 className="title title--h3">What I'm Doing</h2>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                <div className="case-item">
                                    <img className="case-item__icon" src="..\assets\icons\icon-design.svg" alt=""/>
                                    <div>
                                    <h3 className="title title--h4">Web Design</h3>
                                    <p className="case-item__caption">The most modern and high-quality design made at a professional
                                        level.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                <div className="case-item">
                                    <img className="case-item__icon" src="..\assets\icons\icon-dev.svg" alt=""/>
                                    <div>
                                    <h3 className="title title--h4">Web Development</h3>
                                    <p className="case-item__caption">High-quality development of sites at the professional level.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                <div className="case-item">
                                    <img className="case-item__icon" src="..\assets\icons\icon-app.svg" alt=""/>
                                    <div>
                                    <h3 className="title title--h4">Mobile Apps</h3>
                                    <p className="case-item__caption">Professional development of applications for iOS and Android.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                <div className="case-item">
                                    <img className="case-item__icon" src="..\assets\icons\icon-photo.svg" alt=""/>
                                    <div>
                                    <h3 className="title title--h4">Photography</h3>
                                    <p className="case-item__caption">I make high-quality photos of any category at a professional level.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="mt-2">
                            <h2 className="title title--h3">Testimonials</h2>
                            <div className="swiper-container js-carousel-review">
                                <div className="swiper-wrapper">
                                <div className="swiper-slide review-item">
                                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                                    <g className="avatar__hexagon">
                                        <image xlinkHref="../assets/img/avatar-2.jpg" height="100%" width="100%"></image>
                                    </g>
                                    </svg>
                                    <div className="review-item__textbox">
                                    <h4 className="title title--h5">Daniel Lewis</h4>
                                    <p className="review-item__caption">Felecia was hired to create a corporate identity. We were very
                                        pleased with the work done.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide review-item">
                                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                                    <g className="avatar__hexagon">
                                        <image xlinkHref="../assets/img/avatar-3.jpg" height="100%" width="100%"></image>
                                    </g>
                                    </svg>
                                    <div className="review-item__textbox">
                                    <h4 className="title title--h5">Jessica Miller</h4>
                                    <p className="review-item__caption">thanks to the skill of Felecia, we have a design that we can be
                                        proud of.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide review-item">
                                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                                    <g className="avatar__hexagon">
                                        <image xlinkHref="../assets/img/avatar-4.jpg" height="100%" width="100%"></image>
                                    </g>
                                    </svg>
                                    <div className="review-item__textbox">
                                    <h4 className="title title--h5">Tanya Ruiz</h4>
                                    <p className="review-item__caption">Felecia was hired to create a corporate identity. We were very
                                        pleased with the work done.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide review-item">
                                    <svg className="avatar avatar--80" viewBox="0 0 84 84">
                                    <g className="avatar__hexagon">
                                        <image xlinkHref="../assets/img/avatar-5.jpg" height="100%" width="100%"></image>
                                    </g>
                                    </svg>
                                    <div className="review-item__textbox">
                                    <h4 className="title title--h5">Thomas Castro</h4>
                                    <p className="review-item__caption">thanks to the skill of Felecia, we have a design that we can be
                                        proud of.</p>
                                    </div>
                                </div>
                                </div>

                                <div className="swiper-pagination"></div>
                            </div>
                            </div>
                            <div className="mt-4">
                            <h2 className="title title--h3">Clients</h2>

                            <div className="swiper-container js-carousel-clients">
                                <div className="swiper-wrapper">
                    
                                <div className="swiper-slide">
                                    <a href="#"><img src="..\assets\img\logo-1.svg" alt="Logo"/></a>
                                </div>

                        
                                <div className="swiper-slide">
                                    <a href="#"><img src="..\assets\img\logo-2.svg" alt="Logo"/></a>
                                </div>
                        
                                <div className="swiper-slide">
                                    <a href="#"><img src="..\assets\img\logo-3.svg" alt="Logo"/></a>
                                </div>

                        
                                <div className="swiper-slide">
                                    <a href="#"><img src="..\assets\img\logo-4.svg" alt="Logo"/></a>
                                </div>

                    
                                <div className="swiper-slide">
                                    <a href="#"><img src="..\assets\img\logo-1.svg" alt="Logo"/></a>
                                </div>

                
                                <div className="swiper-slide">
                                    <a href="#"><img src="..\assets\img\logo-2.svg" alt="Logo"/></a>
                                </div>
                                </div>

                                <div className="swiper-pagination"></div>
                            </div>
                            </div> */}
                        </div>
                        <footer className="footer">© 2021 DuyDang</footer>
                    </div>
                </div>
            </div>



            {/* <Grid container spacing={4} className={classes.root}>
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
            </Grid> */}
        </>
    );
};

export default HomePage;
