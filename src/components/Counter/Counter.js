import {useReducer, useRef} from 'react';

import {reducer} from '../../reducer/reducer';
import './Counter.css';

const initState = {count_1: 0, count_2: 0, count_3: 0};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();

    return (
        <div className={'content'}>
            <div className={'counter'}>
                <input type="text" ref={input1} value={state.count_1}
                       onChange={() => dispatch({type: 'input', form: 'one', payload: input1.current.value})}/>
                <button onClick={() => dispatch({type: 'inc', form: 'one',})}>INC</button>
                <button onClick={() => dispatch({type: 'dec', form: 'one',})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', form: 'one',})}>RESET</button>
            </div>
            <div className={'counter'}>
                <input type="text" ref={input2} value={state.count_2}
                       onChange={() => dispatch({type: 'input', form: 'two', payload: input2.current.value})}/>
                <button onClick={() => dispatch({type: 'inc', form: 'two'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec', form: 'two'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', form: 'two'})}>RESET</button>
            </div>
            <div className={'counter'}>
                <input type="text" ref={input3} value={state.count_3}
                       onChange={() => dispatch({type: 'input', form: 'three', payload: input3.current.value})}/>
                <button onClick={() => dispatch({type: 'inc', form: 'three'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec', form: 'three'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset', form: 'three'})}>RESET</button>
            </div>
        </div>
    );
};

export {Counter};
