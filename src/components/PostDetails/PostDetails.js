import {useLocation, useParams, Link, Outlet} from 'react-router-dom';
import {useEffect, useState} from 'react';

import {postsService} from '../../services';
import './PostDetails.css';

const PostDetails = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            postsService.getPostById(id).then(({data}) => setPost(data));
        } else {
            setPost(state);
        }
    }, [id, state])

    return (
        <div className={'post-container'}>
            {post && <div className={'post-details-box'}>
                <h1>{id}. {post.title}</h1>
                <h2>UserId: {post.userId}</h2>
                <p><i>Body:</i> {post.body}</p>
                <Link to={'comments'} state={post}>Comments of post</Link>
            </div>}
            <Outlet/>
        </div>
    );
};

export {PostDetails};
