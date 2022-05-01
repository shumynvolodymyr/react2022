import {Link} from 'react-router-dom';

import './Car.css';

const Car = ({car}) => {
    const {id, model, year, price} = car;
    return (
        <div className={'car-box'}>
            <div className={'car-box-info'}>
                <h1>{id}. {model}</h1>
                <h2>Year: {year}</h2>
                <h3>Price: {price}</h3>
            </div>
            <Link className={'link-to-car-details'} to={`${id}`} state={car}>Details</Link>
        </div>
    );
};

export {Car};
