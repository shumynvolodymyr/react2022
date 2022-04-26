import {useRef} from "react";
import {useDispatch} from 'react-redux';
import {addCat, addDog} from '../../redux/slices';

const Form = ({name}) => {
    const dispatch = useDispatch();
    const inputData = useRef();

    const saveData = (e) => {
        e.preventDefault();
        dispatch(name === 'cat' ? addCat({name: inputData.current.value}) : addDog({name: inputData.current.value}));
    }

    return (
        <div className={'forms-box'}>
            <form onSubmit={saveData}>
                <label><input type="text" ref={inputData} placeholder={name}/></label>
                <button>ADD</button>
            </form>
        </div>
    );
};

export {Form};
