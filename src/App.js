import {Routes, Route, Outlet} from 'react-router-dom';

import {MainLayout} from "./layouts";
import {Cats, Dogs} from './components';
import './App.css'

function App() {

    return (
            <div className="App">
                <Outlet/>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}/>
                    <Route path={'/dogs'} element={<Dogs/>}/>
                    <Route path={'/cats'} element={<Cats/>}/>
                </Routes>
            </div>
    );
}

export default App;
