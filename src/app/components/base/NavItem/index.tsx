import { Box, Typography } from '@mui/material';
import { FaUser } from 'react-icons/fa'

const NavItem = () => {
    return (
        <Box sx={{
            width: '100px',
            height: '100px',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <FaUser/>
            <Typography>
                About
            </Typography>
        </Box>
    )
}

export default NavItem;
