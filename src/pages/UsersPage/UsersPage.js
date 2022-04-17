import {Outlet} from 'react-router-dom';

import './UsersPage.css';
import {Users} from '../../components';

const UsersPage = () => {

    return (
        <div className={'users-page'}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};
