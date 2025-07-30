import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link'

const allRecipes = ({ posts }) => {

    const getLastestPosts = posts.slice(0,4)
    return (
        <Grid container spacing={3} sx={css.recipeCards}>
            <Grid size={{ xs: 12, sm: 8, md: 2, lg: 1 }} sx={css.recipeInfo}>
                <Typography variant="h5" component="div" sx={css.infoText}>
                    Explore All Recipes
                </Typography>
            </Grid>

            {getLastestPosts.map((post) => (
                <Grid key={post.id} size={{ xs: 8, sm:4, md: 2, lg: 2 }}>
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
    )
}

export default allRecipes

const css = {
    recipeCards: {
        margin: '20px 50px 20px 50px',
        rowGap: '20px',
        columnGap: '20px',
        border: '1px solid #dddddd',
        justifyContent: 'center',
        padding: '20px',
        background: '#F5F5F5'
    },

    recipeInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px'
    },

    infoText: {
        textAlign: 'center',
        fontFamily: 'Comic Neue, Roboto',
        color: '#222',
        fontWeight: 600
    },
    
    cardImage: {
        width: '100%', 
        height: '120px',
    },

    cardText: {
        fontFamily: 'Comic Neue, Roboto',
        color: '#F5F5F5',
        fontSize: '16px',
        textAlign: 'center'
    }
}

    