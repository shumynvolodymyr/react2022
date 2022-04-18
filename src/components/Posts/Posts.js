import {useEffect, useState} from 'react';

import {postsService} from '../../services';
import {Post} from '../Post/Post';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState(null);
    useEffect(()=>{
        postsService.getPosts().then(({data})=>setPosts(data));
    },[])
    return (
        <div className={'posts-box'}>
            {posts && posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
