import {Car} from '../';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import {carAction} from '../../redux';

const Cars = () => {
    const {cars} = useSelector(({cars}) => cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carAction.getCars());
    }, [dispatch])

    return (
        <div>
            {cars.map((car, i) => <Car car={car} key={i}/>)}
        </div>
    );
};

export {Cars};
