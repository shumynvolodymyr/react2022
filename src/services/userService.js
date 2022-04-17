import {axiosService} from './axiosService';
import {urls} from '../constants';

export const userService = {
    getUsers: () => axiosService.get(urls.users),
    getPostsOfUser: (id) => axiosService.get(`${urls.users}/${id}/posts`),
};
