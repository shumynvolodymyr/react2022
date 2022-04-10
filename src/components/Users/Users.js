import {useEffect, useState} from 'react';

import {userService} from '../../services';
import User from '../User/User';
import './Users.css';
import UserDetails from '../UserDetails/UserDetails';
import PostsOfUser from '../PostsOfUser/PostsOfUser';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    const getPosts = (id) => {
        userService.getPostsOfUser(id).then(({data}) => setPosts(data));
    }

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className={'wrapper'}>
            <div className={'users-box'}>
                {users.map(user => <User key={user.id} user={user} getUser={setUser}/>)}
            </div>
            {user && <UserDetails user={user} getPosts={getPosts}/>}
            {posts && <PostsOfUser posts={posts}/>}
        </div>
    );
}
