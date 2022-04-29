import {axiosService} from './axios.service';
import {urls} from '../constants';

const carService = {
    getCars: () => axiosService.get(urls.cars),
    getCarById: (id) => axiosService.get(`${urls.cars}/${id}`),
    createCar: (car) => axiosService.post(urls.cars, car),
    deleteCarById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateCarById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
}

export {carService};
