import {useDispatch} from 'react-redux';
import {deleteDog, updateDogInputValue} from '../../redux/slices';

import './Dog.css';

const Dog = ({dog: {id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div className={'dog-box'}>
            <h1>{id}. {name}</h1>
            <button onClick={() => dispatch(deleteDog({id}))}>DELETE</button>
            <button onClick={() => dispatch(updateDogInputValue({id, name}))}>UPDATE</button>
        </div>
    );
};

export {Dog};
