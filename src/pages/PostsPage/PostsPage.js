import {Outlet} from 'react-router-dom';

import {Posts} from '../../components';
import './PostsPage.css';

const PostsPage = () => {
    return (
        <div className={'posts-page'}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};
