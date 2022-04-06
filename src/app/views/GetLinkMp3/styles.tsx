import { makeStyles } from "@mui/styles";

const getLinkMp3Style = makeStyles({
    Input: {
        width: '100%',
        height: '36px',
        padding: '5px 5px 5px 10px',
        borderRadius: '5px',
        border: 'none',

        '&:focus': {
            outline: 'none'
        }
    },

    Button: {
        width: '100px',
        height: '36px',
        marginTop: '10px !important',
    },

    Song: {
        display: 'flex',
        alignItems: 'flex-start',

        '& .image':{
            height: '80px',
            width: '80px'
        },
        '& .info':{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '10px',
            padding: '0 5px',
            minWidth: '284px',
            width: '-webkit-fill-available',

            '& .title':{
                color: 'rgb(255, 255, 255)',
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '30px',
                marginBottom: 0,
                textAlign: 'left',
                textOverflow: 'ellipsis',
                textRendering: 'optimizelegibility',
                textTransform: 'none',
                userSelect: 'none',
                verticalAlign: 'top',
                whiteSpace: 'nowrap',
                wordBreak: 'break-word',
                '-webkit-font-smoothing': 'antialiased',
                extOverflow: 'ellipsis !important',
                overflowX: 'hidden',
                width: '100%',
            },
            '& .arttist':{},
        },
        '& .btn-download':{
            width: '100px',
            height: '36px',
            marginLeft: 'auto',
            alignSelf: 'center'
        }
    }
}) as Function;

export default getLinkMp3Style;