import {CarForm, Cars} from './components';
import './App.css'
import {useState} from 'react';


const App = () => {
    const [newCar, setNewCar] = useState(null);
    return (
        <div className={'flex'}>
            <div className={'content'}><Cars newCar={newCar}/></div>
            <div className={'column-left'}><CarForm setNewCar={setNewCar}/></div>
        </div>
    );
};

export default App;
