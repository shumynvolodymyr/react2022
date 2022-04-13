import {useEffect, useState} from 'react';

import {carService} from '../../services';
import {Car} from '../Car/Car';
import './Cars.css';

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getCars().then(({data}) => setCars([...data]));
    }, []);

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
        if (updatedCar) {
            const car = cars.find(car => car.id === updatedCar.id);
            Object.assign(car, updatedCar);
            setCars([...cars]);

        }
    }, [cars, newCar, updatedCar])

    return (
        <div className={'cars-box'}>
            {cars.map(car => <Car key={car.id} cars={cars} car={car} setCars={setCars}
                                  setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};
