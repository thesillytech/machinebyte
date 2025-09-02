import Header from '../components/header'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ArticleIcon, ArrowSquareOutIcon, NoteIcon  } from '@phosphor-icons/react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';


const tech = ({ posts }) => {

    console.log('Data Hello', posts)

    return (
        <Container sx={css.Container}>
            
            {/* Header */}
            <Header />

            <Box sx={css.headers}>
                <Grid container spacing={3} sx={{ alignItems: 'flex-end' }}>
                    <Grid size={{ xs: 12, sm:4, md: 3, lg: 3 }}>
                        <Typography sx={css.text}>TECH</Typography>
                    </Grid>
                    <Grid sx={css.divider}></Grid>
                </Grid>
            </Box>

            <Grid container spacing={1} sx={{ alignItems: 'center', marginBottom: '9px' }}>
                <Box sx={css.icon}>
                    <NoteIcon weight="fill" />
                </Box>
                <Grid>
                    <p style={css.text}>Explore By</p>
                    <p style={css.text}>Categories</p>
                </Grid>
                    <Grid sx={css.recipeCards}>
                    {/* {postsCategory.map((category) => (
                        <Link href="/category/[category].js">
                            <Button variant="contained" sx={css.categoryButtons}>{category}</Button>
                        </Link>
                    ))} */}
                        <Button variant="contained" sx={css.categoryButtons}>category</Button>
                        <Button variant="contained" sx={css.categoryButtons}>category</Button>
                </Grid>
            </Grid>
            

        </Container>
    )
}

export default tech

const css = {
  Container: {
    '&.MuiContainer-root': {
      padding: 0,
      maxWidth: 'xl'
    }
  },

    headers: { 
        margin: '30px 50px 30px 50px',
    }, 

    divider: {
        flexGrow: 1,
        borderBottom: '2px solid #222',
    },

    icon: {
        display: 'flex',
        fontSize: '44px', 

        '@media screen and (max-width:768px)': { 
            fontSize: '30px',
        }
    },

    text: {
        marginTop: '5px',
        marginBottom: '-16px !important',
        fontSize: '38px',
        fontWeight: '500',
        fontFamily: 'josefin sans, Roboto',

        '@media screen and (max-width:768px)': { 
            fontSize: '24px',
        }
    }, 


}