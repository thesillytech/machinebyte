import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ArticleIcon, ArrowSquareOutIcon  } from '@phosphor-icons/react'
import useStore from '../components/state/store'

   
const latestArticles = () => {

    const getLastestPosts = useStore((state) => state.getPostData()).slice(0,4)

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

            <Grid container spacing={3} sx={css.latestPosts}>
                {getLastestPosts.map((post) => (
                    <Grid key={post.id} size={{ xs: 12, sm:6, md: 4, lg: 3 }}>
                        <Card>
                            <CardMedia
                                sx={css.cardImage}
                                image={`/images/${post.category === 'tech' ? 'tech' : 'anime'}/${post.img}`}
                                title="green iguana"
                            />
                        </Card>
                         <Grid container sx={css.articleTitle}>
                            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                                <p style={css.cardText}>
                                    {post.title} 
                                </p>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <ArrowSquareOutIcon size={18} weight="fill" />
                            </Box>
                        </Grid>
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
        border: '1px solid',
    },

    text: {
        marginTop: '5px',
        fontSize: '38px',
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

    latestPosts: {
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
        fontFamily: 'josefin sans, Roboto',
        color: '#222222',
        fontSize: '20px',
        fontWeight: 600,
        padding: 0,
        margin: 0
    }, 
    
    articleTitle: {
        alignItems: 'center',
        marginTop: '0.5rem',
        lineHeight: '1.5rem',
    }
}