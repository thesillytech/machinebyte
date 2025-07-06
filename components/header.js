import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';

const header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={css.appbar}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button color="inherit" sx={css.logo}>𝚝𝚑𝚎 𝚕𝚊𝚣𝚢 𝚌𝚘𝚘𝚔</Button>
              <Button color="inherit">Login</Button>
          </Box>
            </AppBar>
        </Box>
    )
}

export default header

const css = {
    appbar: {
        background: 'rgb(11 30 71)',
        color: '#E2E8F0'
    }, 

    logo: {
        fontSize: 40
    }
}