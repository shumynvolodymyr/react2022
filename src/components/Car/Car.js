import './Car.css';
import {carService} from '../../services';

const Car = ({car, cars, setCars, setCarForUpdate}) => {
    const {id, model, year, price} = car;

    const deleteCar = async (id) => {
        await carService.deleteCar(id);
        setCars(cars.filter(car => car.id !== id));
    }

    return (
        <div className={'car-box'}>
            <h1>Model: {model}</h1>
            <h3>Year: {year}</h3>
            <h3>Price: {price}</h3>
            <div className={'car-box-btn'}>
                <button onClick={() => deleteCar(id)}>DELETE</button>
                <button onClick={() => setCarForUpdate(car)}>UPDATE</button>
            </div>
        </div>
    );
};

export {Car};
