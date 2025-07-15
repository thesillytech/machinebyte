import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Header from '../components/header'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

export default function Home({ allPostsData }) {
  return (
    <Container sx={css.Container}>
    
    <Header />

    {/* Latest Recipe Banner */}
    <Grid container spacing={2}>
      <Grid size={12}>
        <Image
          src="/images/placeholder_banner.jpg"
          width={1200}
          height={500}
          alt="Picture of the author"
        />
      </Grid>
    </Grid>

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

  headingMd: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    paddingTop: '1px'
  },

  padding1px: {
    paddingTop: '1px'
  }
}