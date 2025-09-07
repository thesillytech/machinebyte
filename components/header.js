import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Toolbar } from '@mui/material';
import { ListIcon } from "@phosphor-icons/react";
import Link from 'next/link'

const header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={css.appBar}>
                    <Toolbar>
                        {/* <Avatar alt="Logo" src="/images/logo/logo-5.png" variant="square" sx={css.logo}/> */}
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Link href="/"><Button color="inherit" sx={css.headerLinks}>Home</Button></Link>
                        <Link href="/tech"><Button color="inherit" sx={css.headerLinks}>Tech</Button></Link>
                        <Link href="/anime"><Button color="inherit" sx={css.headerLinks}>Anime</Button></Link>
                        <Link href="/about"><Button color="inherit" sx={css.headerLinks}>About</Button></Link>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Burger Menu for Mobile View */}
            <Box sx={css.burgerMenu}>
                <Toolbar>
                <Avatar alt="Logo" src="/images/logo/logo-5.png" variant="square" sx={css.logo}/>

                <Box sx={{ flexGrow: 1 }}></Box>

                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <ListIcon size={50} color="#E2E8F0" />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={css.burgerIcon}
                    slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                    }}
                >
                    <Link href="/" ><MenuItem onClick={handleClose} sx={{ fontWeight: 500}}>Home</MenuItem></Link>
                    <Link href="/tech"><MenuItem onClick={handleClose} sx={{ fontWeight: 500}}>Tech</MenuItem></Link>
                    <Link href="/anime"><MenuItem onClick={handleClose} sx={{ fontWeight: 500}}>Anime</MenuItem></Link>
                    <Link href="/about"><MenuItem onClick={handleClose} sx={{ fontWeight: 500}}>About</MenuItem></Link>
                </Menu>
                </Toolbar>
            </Box>
        </>
    )
}

export default header

const css = {
    appBar: {
        background: '#222222',
        color: '#E2E8F0',
        borderBottom: '1px solid #F5F5F5',
        '@media screen and (max-width:768px)': { 
            display: 'none'
        }
    }, 

    logo: {
        width: 50,
        height: 50,
    },

    headerLinks: {
        fontSize: '20px',
        textTransform: 'none',
        marginRight: '30px',
        '& .hover': {
            color: 'yellow'
        }
    }, 

    burgerIcon: {
        '& .MuiList-root': {
            width: '100vw',
            background: '#E2E8F0',
            color: '#0B1E47',
        }
    },

    burgerMenu: {
        display: 'none',
        background: '#222222',
        color: '#E2E8F0',
        padding: '10px',
        '@media screen and (max-width:768px)': { 
            display: 'block'
        }
    }
}

    