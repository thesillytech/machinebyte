import { getSortedPostsData } from '../lib/posts';
import { useRouter } from 'next/router'
import Container from '@mui/material/Container';
import Header from '../components/header'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const category = ({ allPostsData }) => {
    const router = useRouter()
    const { name } = router.query

    return (
        <Container sx={css.Container}>

            {/* Header */}
            <Header />
            
            <Box sx={css.headers}>
                <Grid container spacing={3} sx={{ alignItems: 'flex-end' }}>
                    <Grid size={{ xs: 12, sm:4, md: 3, lg: 3 }}>
                        <Typography sx={css.text}>EXPLORE BY {name}</Typography>
                    </Grid>
                    <Grid sx={css.divider}></Grid>
                </Grid>
            </Box>

            <Grid container spacing={1} sx={css.content}>
                <Grid size={{ xs: 5, sm: 5, md: 4, lg: 3 }}>
                    <img src="/images/anime/onepiece.jpg"  />
                </Grid>
                <Grid size={{ xs: 5, sm: 5, md: 6, lg: 4 }}>Content</Grid>
            </Grid>
        
        </Container>

    )
}

export default category

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

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
        borderBottom: '2px solid #153461',
    },
    
    text: {
        marginTop: '5px',
        marginBottom: '-16px !important',
        fontSize: '38px',
        fontWeight: '500',
        fontFamily: 'josefin sans, Roboto',
        textTransform: 'uppercase',
        color: '#153461',

        '@media screen and (max-width:768px)': { 
            fontSize: '24px',
        }
    }, 

    content: {
        margin: '20px 50px 20px 50px',
        rowGap: '20px',
        columnGap: '20px',
    },

    cardImage: {
        width: '100%', 
        height: '240px',
    },
}