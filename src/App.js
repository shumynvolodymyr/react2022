import {Routes, Route, Navigate} from 'react-router-dom';

import {MainLayouts} from './layouts';
import {CarsPage, NotFoundPage, SingleCarPage} from './pages';
import './App.css'

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayouts/>}>
                    <Route index element={<Navigate to={'cars'}/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'cars/:id'} element={<SingleCarPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
