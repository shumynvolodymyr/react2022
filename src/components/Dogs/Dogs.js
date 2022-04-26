import {useSelector} from 'react-redux';

import {Form} from "../Form/Form";
import {Dog} from '../Dog/Dog';
import './Dogs.css';

const Dogs = () => {
    const {dogs} = useSelector(state => state.dogs);

    return (
        <div className={'dogs-box'}>
            <Form name={'dogs'}/>
            {dogs.map(dog => <Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {Dogs};
