import {Form} from "../Form/Form";
import {ADD_DOG} from "../../constants";
import {Dog} from "../";
import './Dogs.css';

const Dogs = ({dispatch, dogs}) => {
    return (
        <div className={'dogs-box'}>
            <Form name={'dog'} dispatch={dispatch} type={ADD_DOG}/>
            {dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export {Dogs};