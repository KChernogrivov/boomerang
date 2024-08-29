import callApi from "@/hooks/useApi";

export const postController = {
    getPosts: async (page: number) => {
        return callApi({method: 'GET', url: `posts?page=${page}`});
    },
    getPost: async (id: number) => {
        return callApi({method: 'GET', url: `posts/${id}`});
    }
}
