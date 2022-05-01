import {carAction} from '../../redux';
import {useNavigate,} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import './CarDetails.css';

const CarDetail = ({car}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id, model, year, price} = car;

    const deleteCar = () => {
        dispatch(carAction.deleteCar({id}));
        navigate('/cars');
    }

    return (
        <div className={'wrapper'}>
            <div className={'car-details-box'}>
                <h1>{id}. {model}</h1>
                <h2>Year: {year}</h2>
                <h3>Price: {price} $</h3>
            </div>
            <div className={'car-details-btn-box'}>
                <button className={'car-details-btn'} onClick={deleteCar}>DELETE</button>
                <button className={'car-details-btn'}
                        onClick={() => dispatch(carAction.setCarForUpdate({car}))}>UPDATE
                </button>
            </div>
        </div>
    );
};

export {CarDetail};
