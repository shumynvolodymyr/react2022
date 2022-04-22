import {Form} from "../Form/Form";
import {ADD_CAT} from "../../constants";
import {Cat} from "../";
import './Cats.css';


const Cats = ({dispatch, cats}) => {
    return (
        <div className={'cats-box'}>
            <Form name={'cat'} dispatch={dispatch} type={ADD_CAT}/>
            {cats.map(value => <Cat key={value.id} cat={value} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cats};