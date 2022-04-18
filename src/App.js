import {Routes, Route} from 'react-router-dom';

import {MainLayout} from './layouts';
import {NotFoundPage, PostsPage, UsersPage} from './pages';
import {UserDetails, PostsOfUser, PostDetails, CommentsOfPost} from './components';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetails/>}>
                        <Route path={'posts'} element={<PostsOfUser/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetails/>}>
                        <Route path={'comments'} element={<CommentsOfPost/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
