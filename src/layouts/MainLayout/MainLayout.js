import {Outlet, NavLink} from 'react-router-dom';

import './MainLayout.css';

const MainLayout = () => {
    return (
        <div>
            <div className={'header'}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
