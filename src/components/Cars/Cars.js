import {useEffect, useState} from 'react';

import {carService} from '../../services';
import {Car} from '../Car/Car';
import './Cars.css';

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getCars().then(({data}) => setCars([...data]));
    }, [newCar]);

    useEffect(() => {
        if (updatedCar) {
            const car = cars.find(car => car.id === updatedCar.id);
            Object.assign(car, updatedCar);
            setCars([...cars]);
        }
    }, [updatedCar])

    return (
        <div className={'cars-box'}>
            {cars.map((car, index) => <Car key={index} cars={cars} car={car} setCars={setCars}
                                           setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};
