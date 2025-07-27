import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

   
const latestRecipe = ({ posts }) => {

    const getLastestPosts = posts.slice(0,4)
    return (
        <>
            <Box sx={css.headers}>
                <Divider sx={css.divider} />
                <Typography sx={css.text}>Latest Recipes</Typography>
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
                            <CardContent sx={{ background: '#222' }}>
                                <Typography variant="h5" component="div" sx={css.cardText}>
                                    {post.title} 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default latestRecipe

const css = {
    headers: {
        margin: '30px 50px 30px 50px',
        textAlign: 'center'
    }, 

    divider: {
        border: '1px solid'
    },

    text: {
        marginTop: '5px',
        fontSize: '60px',
        fontWeight: '500',
        fontFamily: 'Comic Neue, Roboto',
        color: ''
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
        color: '#F5F5F5',
        fontSize: '24px',
        textAlign: 'center'
    }
}