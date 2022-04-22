import {useReducer} from "react";
import {reducer} from "./reducer/reducer";
import {Routes, Route} from 'react-router-dom';

import {MainLayout} from "./layouts";
import {DogsPage, CatsPage} from "./pages";

const initialState = {
    cats: [],
    dogs: []
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout dispatch={dispatch} state={state}/>}>
                    <Route path={'dogs'} element={<DogsPage/>}/>
                    <Route path={'cats'} element={<CatsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
