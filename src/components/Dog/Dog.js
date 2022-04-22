import './Dog.css';
import {DELETE_DOG} from "../../constants";

const Dog = ({dog: {id, name}, dispatch}) => {
    return (
        <div className={'dog-box'}>
            <h1>{id}. {name}</h1>
            <button onClick={() => dispatch({type: DELETE_DOG, payload: id})}>DELETE</button>
        </div>
    );
};

export {Dog};