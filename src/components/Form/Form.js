import {useRef} from "react";

const Form = ({name,type, dispatch}) => {
    let inputData = useRef();

    const saveData = (e) => {
        e.preventDefault();
        dispatch({type, payload: inputData.current.value})
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