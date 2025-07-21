import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { columnGap, rowGap } from '@mui/system';


const latestRecipe = () => {
    return (
        <>
            <Box sx={css.headers}>
                <Divider sx={css.divider} />
                <Typography sx={css.text}>Latest Recipes</Typography>
            </Box>

            <Grid container spacing={3} sx={css.recipeCards}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
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
        fontSize: '30px',
        fontWeight: '500',
        fontFamily: 'Comic Neue, Roboto'
    }, 

    recipeCards: {
        margin: '20px 50px 20px 50px',
        rowGap: '20px',
        columnGap: '20px'
    }

}