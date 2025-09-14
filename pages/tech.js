import Header from '../components/header'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ArticleIcon, ArrowSquareOutIcon, NoteIcon  } from '@phosphor-icons/react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import useStore from '../components/state/store';
import { getSortedPostsData } from '../lib/posts';
import InitilizedData from '../utility/hook/useInitializedData';

const tech = ({ allPostsData }) => {
    InitilizedData(allPostsData)
    
    const getPostByCategory = useStore((state) => state.getPostByCategory)
    const techPosts = getPostByCategory('tech')

    return (
        <Container sx={css.Container}>
            
            {/* Header */}
            <Header />

            <Box sx={css.headers}>
                <Grid container spacing={3} sx={{ alignItems: 'flex-end' }}>
                    <Grid size={{ xs: 12, sm:4, md: 2, lg: 2 }}>
                        <Typography sx={css.text}>TECH</Typography>
                    </Grid>
                    <Grid sx={css.divider}></Grid>
                </Grid>
            </Box>

            <Grid container spacing={3} sx={css.latestPosts}>
                {techPosts.map((post) => (
                    <Grid key={post.id} size={{ xs: 12, sm:6, md: 4, lg: 3 }}>
                        <Card>
                            <CardMedia
                                sx={css.cardImage}
                                image={`/images/tech/${post.img}`}
                                title={`${post.img}`}
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
        </Container>
    )
}

export default tech

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

    articleTitle: {
        alignItems: 'center',
        marginTop: '0.5rem',
        lineHeight: '1.5rem',
    },

    cardText: {
        fontFamily: 'josefin sans, Roboto',
        color: '#222222',
        fontSize: '20px',
        fontWeight: 600,
        padding: 0,
        margin: 0
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
        color: '#153461',

        '@media screen and (max-width:768px)': { 
            fontSize: '24px',
        }
    }, 


}