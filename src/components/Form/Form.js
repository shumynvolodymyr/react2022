import {useRef} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {addCat, addDog, updateCat, updateDog} from '../../redux/slices';

const Form = ({name}) => {
    const dispatch = useDispatch();
    const {dataToUpdate} = useSelector(state => state[name]);
    let inputData = useRef();
    if (dataToUpdate) {
        inputData.current.value = dataToUpdate.name
    }

    const saveData = (e) => {
        e.preventDefault();
        dispatch(name === 'cats' ? addCat({name: inputData.current.value}) : addDog({name: inputData.current.value}));
        inputData.current.value = '';
    }

    const updateData = (e) => {
        e.preventDefault();
        dispatch(name === 'cats' ? updateCat({name: inputData.current.value}) : updateDog({name: inputData.current.value}));
        inputData.current.value = '';
    }

    return (
        <div className={'forms-box'}>
            <form onSubmit={!dataToUpdate ? saveData : updateData}>
                <label><input type="text" ref={inputData} placeholder={name}/></label>
                <button>{dataToUpdate ? 'SAVE' : 'ADD'}</button>
            </form>
        </div>
    );
};

export {Form};
