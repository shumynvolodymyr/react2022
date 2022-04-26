import {useDispatch} from 'react-redux';
import {deleteDog} from '../../redux/slices';

import './Dog.css';

const Dog = ({dog: {id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div className={'dog-box'}>
            <h1>{id}. {name}</h1>
            <button onClick={() => dispatch(deleteDog({id}))}>DELETE</button>
        </div>
    );
};

export {Dog};
