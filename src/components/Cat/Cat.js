import {useDispatch} from 'react-redux';
import {deleteCat} from '../../redux/slices';

import './Cat.css';

const Cat = ({cat: {id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div className={'cat-box'}>
            <h1>{id}. {name}</h1>
            <button onClick={() => dispatch(deleteCat({id}))}>DELETE</button>
        </div>
    );
};

export {Cat};
