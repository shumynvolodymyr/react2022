import {CarForm, Cars} from './components';
import './App.css'
import {useState} from 'react';


const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);

    return (
        <div className={'flex'}>
            <div className={'content'}><Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updatedCar={updatedCar}/></div>
            <div className={'column-left'}><CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} setUpdatedCar={setUpdatedCar}/></div>
        </div>
    );
};

export default App;
