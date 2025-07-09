import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Toolbar } from '@mui/material';

const header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={css.appbar}>
                <Toolbar>
                    <Avatar alt="Logo" src="/images/logo/logo-5.png" variant="square" sx={css.logo}/>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Button color="inherit" sx={css.headerLinks}>Recipes</Button>
                    <Button color="inherit" sx={css.headerLinks}>About</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default header

const css = {
    appbar: {
        background: 'rgb(11 30 71)',
        color: '#E2E8F0',
        padding: '10px'
    }, 

    logo: {
        width: 50,
        height: 50,
    },

    headerLinks: {
        fontSize: '20px'
    }
}