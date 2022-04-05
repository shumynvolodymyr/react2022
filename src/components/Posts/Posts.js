import {useEffect, useState} from 'react';
import {getPosts} from '../../services/fetch.api';
import Post from '../Post/Post';
import './Posts.css';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(posts => setPosts(posts));
    }, []);

    return (
        <div className={'posts-box'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}
