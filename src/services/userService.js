import {axiosService} from './axiosService';
import {urls} from '../constants';

export const userService = {
    getUsers: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`),
    getPostsOfUser: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`),
};
