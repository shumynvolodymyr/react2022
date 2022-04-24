import {createContext, useReducer} from "react";
import {reducer} from "./reducer/reducer";
import {Routes, Route, Outlet} from 'react-router-dom';

import {MainLayout} from "./layouts";
import {Cats, Dogs} from './components';
import './App.css'

const initialState = {
    cats: [],
    dogs: []
};

export const MyContext = createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MyContext.Provider value={{state, dispatch}}>
            <div className="App">
                <Outlet/>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}/>
                    <Route path={'/dogs'} element={<Dogs/>}/>
                    <Route path={'/cats'} element={<Cats/>}/>
                </Routes>
            </div>
        </MyContext.Provider>
    );
}

export default App;
