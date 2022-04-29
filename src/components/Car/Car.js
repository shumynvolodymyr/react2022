import {useDispatch} from 'react-redux';
import {carAction} from '../../redux';

const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id, model, year, price} = car
    return (
        <div>
            <h1>{id}. {model}</h1>
            <h2>Year: {year}</h2>
            <h3>Price: {price}</h3>
            <button onClick={() => dispatch(carAction.deleteCar({id}))}>DELETE</button>
            <button onClick={() => dispatch(carAction.setCarForUpdate({car}))}>UPDATE</button>
        </div>
    );
};

export {Car};
