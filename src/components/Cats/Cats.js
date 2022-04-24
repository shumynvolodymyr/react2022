import {Form} from "../Form/Form";
import {ADD_CAT} from "../../constants";
import {Cat} from "../";
import {MyContext} from '../../App';
import './Cats.css';

const Cats = () => {
    return (
        <MyContext.Consumer>
            {
                ({state: {cats}, dispatch}) =>
                    <div className={'cats-box'}>
                        <Form name={'cat'} dispatch={dispatch} type={ADD_CAT}/>
                        {cats.map(value => <Cat key={value.id} cat={value} dispatch={dispatch}/>)}
                    </div>
            }
        </MyContext.Consumer>
    );
};

export {Cats};
