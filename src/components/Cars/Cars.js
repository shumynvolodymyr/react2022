import {useEffect, useState} from 'react';

import {carService} from '../../services';
import {Car} from '../Car/Car';
import './Cars.css';

const Cars = ({newCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getCars().then(({data}) => setCars([...data]));
    }, []);

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar])

    return (
        <div className={'cars-box'}>
            {cars.map(car =><Car key={car.id} cars={cars} car={car} setCars={setCars}/>)}
        </div>
    );
};

export {Cars};
