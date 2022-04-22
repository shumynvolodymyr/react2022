import {DELETE_CAT} from "../../constants";
import './Cat.css';

const Cat = ({cat: {id, name}, dispatch}) => {
    return (
        <div className={'cat-box'}>
            <h1>{id}. {name}</h1>
            <button onClick={() => dispatch({type: DELETE_CAT, payload: id})}>DELETE</button>
        </div>
    );
};

export {Cat};