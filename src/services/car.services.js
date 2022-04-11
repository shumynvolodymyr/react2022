import {axiosService} from './axios.service';
import {urls} from '../constants';

const carService = {
    getCars: () => axiosService.get(urls.cars),
    getCarById: (id) => axiosService.get(`${urls.cars}/${id}`),
    createCar: (car) => axiosService.post(urls.cars, car),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateCar: (carToUpdate)=> axiosService.put(urls.cars, carToUpdate)

};

export {carService};
