import {Form} from "../Form/Form";
import {ADD_DOG} from "../../constants";
import {Dog} from "../";
import {MyContext} from '../../App';
import './Dogs.css';

const Dogs = () => {
    return (
        <MyContext.Consumer>
            {
                ({state: {dogs}, dispatch}) =>
                    <div className={'dogs-box'}>
                        <Form name={'dog'} dispatch={dispatch} type={ADD_DOG}/>
                        {dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
                    </div>
            }
        </MyContext.Consumer>
    );
};

export {Dogs};
