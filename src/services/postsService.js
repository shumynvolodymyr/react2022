import {axiosService} from './axiosService';
import {urls} from '../constants';

export const postsService = {
    getPosts: () => axiosService.get(urls.posts),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getCommentsOfPost: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`)
}
