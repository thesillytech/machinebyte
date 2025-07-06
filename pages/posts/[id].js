import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from 'next/head';
import Date from '../../components/date';
import utitStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData,
        }
    }
}

export async function getStaticPaths () {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    }
}

export default function Post ({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utitStyles.headingXl}>{postData.title}</h1>
                <div className={utitStyles.lightText}>
                    <Date dateString={postData.date}></Date>
                </div>
            </article>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
        </Layout>
    )
}