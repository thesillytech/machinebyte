import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ArticleIcon, ArrowSquareOutIcon  } from '@phosphor-icons/react'

   
const latestArticles = ({ posts }) => {

    const getLastestPosts = posts.slice(0,4)
    return (
        <>
            <Box sx={css.headers}>
                <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                    <Box sx={css.icon}>
                        <ArticleIcon weight="fill" />
                    </Box>
                    <Typography sx={css.text}>Most Recent</Typography>
                </Grid>
                <Divider sx={css.divider} />
            </Box>

            <Grid container spacing={3} sx={css.recipeCards}>
                {getLastestPosts.map((post) => (
                    <Grid key={post.id} size={{ xs: 12, sm:6, md: 4, lg: 3 }}>
                        <Card>
                            <CardMedia
                                sx={css.cardImage}
                                image={`/images/recipe-cards/${post.img}`}
                                title="green iguana"
                            />
                            {/* <CardContent sx={{ alignItems: 'center' }}>
                                <Typography variant="h5" component="div" sx={css.cardText}>
                                    {post.title} 
                                </Typography>
                            </CardContent> */}
                            <Typography variant="h5" component="div" sx={css.cardText}>
                                {post.title} 
                            </Typography>
                            <ArrowSquareOutIcon size={32} weight="fill" />
                        </Card>
                    </Grid>
                   
                ))}
            </Grid>
        </>
    )
}

export default latestArticles

const css = {
    headers: {
        margin: '30px 50px 30px 50px',
    }, 

    divider: {
        border: '1px solid'
    },

    text: {
        marginTop: '5px',
        fontSize: '38px',
        fontWeight: '500',
        fontFamily: 'Comic Neue, Roboto',

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

    recipeCards: {
        margin: '20px 50px 20px 50px',
        rowGap: '20px',
        columnGap: '20px',
        justifyContent: 'center'
    },

    cardImage: {
        width: '100%', 
        height: '240px',
    },

    cardText: {
        fontFamily: 'Comic Neue, Roboto',
        color: '#222222',
        fontSize: '24px',
        // textAlign: 'center'
    }
}