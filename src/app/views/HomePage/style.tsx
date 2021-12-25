import { makeStyles } from "@mui/styles";

const HomePageStyle = makeStyles({
    root: {
        width: '100% !important',
        maxWidth: '1140px !important',
        marginTop: '14.375rem !important',
        marginLeft: 'auto !important',
        marginRight: 'auto !important',

        '& .box': {
            color: 'white',
            backgroundColor: '#23262B',
            boxShadow: '-4px 8px 24px rgb(0 0 0 / 7%)',
            borderRadius: '20px',
            padding: '20px'
        },

        '& .header-left': {
            '& .avatar-container': {
                position: 'relative',
            },
            '& .avatar': {
                border: 'solid 7px #23262B',
                borderRadius: '40px',
                height: '10.125rem',
                width: '10.125rem',
                top: '-45px',
                position: 'absolute',
                left: '70px',
                backgroundImage: 'url(./avatar.jpg)',
                backgroundRepeat: 'round',
                backgroundOrigin: 'border-box',
            }
        }
    }
}) as Function
export default HomePageStyle