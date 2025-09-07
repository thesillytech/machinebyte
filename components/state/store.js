import { create } from 'zustand'

const useStore = create((set, get) => ({
    // state
    allPostData: [],
    isInitialized: false,

    // actions
    blogPosts: (posts) => set({  allPostData: posts, isInitialized: true }),

    getPostData: () => get().allPostData,

    getPostByCategory: (name) => {
        const posts = get().allPostData
        return posts.filter(post => post.category === name)
    }

}))

export default useStore