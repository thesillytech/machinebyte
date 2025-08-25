import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { NoteIcon  } from '@phosphor-icons/react'
import Button from '@mui/material/Button';
   
const exploreCategories = ({ posts }) => {

    const postsCategory = posts.filter((post, index, array) => array.findIndex(p => p.category === post.category) === index)
        .map(post => post.category)

    return (
        <>
            <Box sx={css.headers}>
                <Grid container spacing={1} sx={{ alignItems: 'center', marginBottom: '9px' }}>
                    <Box sx={css.icon}>
                        <NoteIcon weight="fill" />
                    </Box>
                    <Grid>
                        <p style={css.text}>Explore By</p>
                        <p style={css.text}>Categories</p>
                    </Grid>
                     <Grid sx={css.recipeCards}>
                        {postsCategory.map((category) => (
                            <Button variant="contained" sx={css.categoryButtons}>{category}</Button>
                        ))}
                            <Button variant="contained" sx={css.categoryButtons}>category</Button>
                            <Button variant="contained" sx={css.categoryButtons}>category</Button>
                    </Grid>
                </Grid>
                <Divider sx={css.divider} />
            </Box>
        </>
    )
}

export default exploreCategories

const css = {
    headers: {
        margin: '50px 50px 30px 50px',
    }, 

    divider: {
        border: '1px solid',
    },

    text: {
        margin: 0,
        padding: '4px',
        fontSize: '16px',
        fontWeight: '500',
        fontFamily: 'josefin sans, Roboto',

        '@media screen and (max-width:768px)': { 
            fontSize: '24px',
        }
    }, 

    icon: {
        display: 'flex',
        fontSize: '44px', 

        '@media screen and (max-width:768px)': { 
            fontSize: '30px',
        }
    },

    categoryButtons: {
        backgroundColor: '#222222',
        marginLeft: '20px',

         '@media screen and (max-width:768px)': { 
            marginLeft: 0,
            marginRight: '7px',
            marginBottom: '7px'
        }
    }
}