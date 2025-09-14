import { useEffect } from 'react';
import useStore from '../../components/state/store';

const useInitilizedData = (allPostsData) => {
    const blogPosts = useStore((state) => state.blogPosts)
    const isInitialized = useStore((state) => state.isInitialized)

    useEffect(() => {
        if(!isInitialized && allPostsData?.length > 0) {
            console.log('Grab Initial Data')
            blogPosts(allPostsData)
        }
    }, [allPostsData, blogPosts, isInitialized])

    return isInitialized
}

export default useInitilizedData