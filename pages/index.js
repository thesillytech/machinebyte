import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Header from '../components/header'
import LastetRecipes from '../components/latest-recipes'
import AllRecipes from '../components/all-recipes';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Home({ allPostsData }) {
  return (
    <Container sx={css.Container}>
    
    <Header />

    {/* Latest Recipe Banner */}
    <Grid container spacing={2}>
      <Grid sx={css.mainBanner} size={12}>
        <img src="/images/placeholder_banner.jpg" alt="banner" style={css.banner}></img>
      </Grid>
    </Grid>

    {/* Latest Recipe Cards */}
    <LastetRecipes posts={allPostsData} />

    <AllRecipes posts={allPostsData}/>

    {/* <div className={styles.container}>

      <section sx={css.headingMd}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      </div> */}
    </Container>
  );
}

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
      margin: 0,
      maxWidth: 'xl'
    }
  },

  mainBanner: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    margin: '30px',
    height: '40vh',
    overflow: 'hidden'
  },

  banner: {
    objectFit: 'cover',
    width: '1200px'
  },

  headingMd: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    paddingTop: '1px'
  },

  padding1px: {
    paddingTop: '1px'
  }
}