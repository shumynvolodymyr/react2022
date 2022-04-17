import {Routes, Route} from 'react-router-dom';
import {MainLayout} from './layouts';
import {UsersPage} from './pages';
import {UserDetails, PostsOfUser} from './components';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetails/>}>
                        <Route path={'posts'} element={<PostsOfUser/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
