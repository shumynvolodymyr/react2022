import {useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import {CarDetail} from '../../components';
import {carService} from '../../services';
import {NotFoundPage} from '../NotFoundPage/NotFoundPage';

const SingleCarPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [car, setCar] = useState(state);

    useEffect(() => {
        if (!state) {
            carService.getCarById(id).then(({data}) => setCar(data));
        }
    }, [id, state]);

    return (
        <div>
            {car ? <CarDetail car={car}/> : <NotFoundPage/>}
        </div>
    );
};

export {SingleCarPage};
