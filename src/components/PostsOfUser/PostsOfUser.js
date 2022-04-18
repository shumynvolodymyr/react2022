import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import {userService} from '../../services';
import {PostOfUser} from '../';
import './PostsOfUser.css';

const PostsOfUser = () => {
    const [posts, setPosts] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        userService.getPostsOfUser(id).then(({data}) => setPosts(data))
    }, [id])
    return (
        <div className={'posts-of-user-box'}>
            {posts && posts.map(post => <PostOfUser post={post} key={post.id}/>)}
        </div>
    );
};

export {PostsOfUser};
