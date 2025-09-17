import Header from '../components/header'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ArticleIcon, ArrowSquareOutIcon, NoteIcon  } from '@phosphor-icons/react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { getSortedPostsData, getPostData } from '../lib/posts';
import InitilizedData from '../utility/hook/useInitializedData';
import useStore from '../components/state/store';

const science = ({ animePostData }) => {
    return (
        <Container sx={css.Container}>
            
            {/* Header */}
            <Header />

            <Box sx={css.headers}>
                <Grid container spacing={3} sx={{ alignItems: 'flex-end' }}>
                    <Grid size={{ xs: 12, sm:4, md: 3, lg: 3 }}>
                        <Typography sx={css.text}>SCIENCE</Typography>
                    </Grid>
                    <Grid sx={css.divider}></Grid>
                </Grid>
            </Box>

            {animePostData.map((post) => (
                <Grid key={post.id} container spacing={3} sx={css.latestPosts}>
                    <Grid size={{ xs: 12, sm:6, md: 3, lg: 2  }}>
                        <Card>
                            <CardMedia
                                sx={css.cardImage}
                                image={`/images/anime/${post.img}`}
                                title={`${post.img}`}
                            />
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm:6, md: 8, lg: 8 }} >
                        <Box sx={{ display: 'flex', flexGrow: 1, color: '#153461' }}>
                            <p style={css.cardText}>
                                {post.subcategory} 
                            </p>
                        </Box>

                        <Box sx={{ display: 'flex', flexGrow: 1, marginTop: '20px' }}>
                            <p style={css.cardText}>
                                {post.title} 
                            </p>
                        </Box>

                        <Box sx={{ display: 'flex', flexGrow: 1, marginTop: '20px', margin: 0 }}>
                            <Box style={css.cardText}>
                                <Box sx={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: post.contentHTML.replace(/<[^>]*>/g, '').split(/\s+/).slice(0, 15).join(' ') + '...' }}  />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </Container>
    )
}

export default science

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const animePosts = allPostsData.filter(post => post.category === 'anime')

  const animePostData = await Promise.all(
    animePosts.map(async (post) => {
        const postData = await getPostData(post.id)
        return {
            id: post.id,
            ...postData
        }
    })
  )

  return {
    props: {
      animePostData
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
        display: 'flex',
        margin: '20px 50px 20px 50px',
        rowGap: '20px',
        columnGap: '20px',
        justifyContent: 'left',
        alignItems: 'center'
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
        // color: '#222222',
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