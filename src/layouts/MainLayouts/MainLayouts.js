import {Outlet} from 'react-router-dom';

import CarForm from '../../components/CarForm/CarForm';
import './MainLayouts.css';

const MainLayouts = () => {
    return (
        <div className={'main-layouts-box'}>
            <CarForm/>
            <br/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};
