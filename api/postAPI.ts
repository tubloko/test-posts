import axios from 'axios';

const url = 'https://simple-blog-api.crew.red';
export default class PostAPI {
    getAllPosts() {
        return axios.get(`${url}/posts`)
            .then(({data}) => data)
            .catch(err => err);
    }
    deletePostById(id) {
        return axios.delete(`${url}/posts/${id}`)
            .then(() => 'post was deleted successfully')
            .catch(err => err);
    }
    createNewPost(title, body) {
        return axios.post(`${url}/posts`, {title, body})
            .then(() => 'post was created successfully')
            .catch(err => err);
    }
    getCurrentPost(id) {
        return axios.get(`${url}/posts/${id}?_embed=comments`)
            .then(({data}) => data)
            .catch(err => err);
    }
};
