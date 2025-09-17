import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useStore from './state/store'

const scienceCategory = () => {

    // get latest anime posts by category
    const getPostByCategory = useStore((state) => state.getPostByCategory)
    const getLastestPosts = getPostByCategory('anime').slice(0,4)

    return (
        <Grid container spacing={3} sx={css.recipeCards}>
            <Grid size={{ xs: 12, sm: 8, md: 2, lg: 1 }} sx={css.recipeInfo}>
                <Typography variant="h5" component="div" sx={css.infoText}>
                    Explore By Science
                </Typography>
            </Grid>

            {getLastestPosts.map((post) => (
                <Grid key={post.id} size={{ xs: 8, sm:4, md: 2, lg: 2 }}>
                    <Card sx={{ '&.MuiPaper-root': {background: 'none'}}}>
                        <CardMedia
                            sx={css.cardImage}
                            image={`/images/anime/${post.img}`}
                            title="green iguana"
                        />
                        <CardContent sx={css.cardContent}>
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

export default scienceCategory

const css = {
    recipeCards: {
        margin: '20px 50px 20px 50px',
        rowGap: '20px',
        columnGap: '20px',
        border: '1px solid #dddddd',
        justifyContent: 'center',
        padding: '20px',
        background: '#0E1344'
    },

    recipeInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px'
    },

    infoText: {
        textAlign: 'center',
        fontFamily: 'josefin sans, Roboto',
        color: '#F5F5F5 ',
        fontWeight: 600
    },
    
    cardImage: {
        width: '100%', 
        height: '120px',
    },

    cardContent: {
        background: '#153461',

        '&.MuiCardContent-root': {
            padding: '15px'
        }
    },

    cardText: {
        fontFamily: 'josefin sans, Roboto',
        color: '#F5F5F5',
        fontSize: '16px',
        textAlign: 'center'
    }
}

    