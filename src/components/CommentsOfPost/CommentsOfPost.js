import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';

import {postsService} from '../../services';
import './CommentsOfPost.css';
import {CommentOfPost} from '../';

const CommentsOfPost = () => {
    const {state: {id}} = useLocation();
    const [comments, setComments] = useState(null);

    useEffect(() => {
        postsService.getCommentsOfPost(id).then(({data}) => setComments(data));
    }, [id])
    return (
        <div className={'comments-of-post-box'}>
            {comments && comments.map(comment => <CommentOfPost key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsOfPost};
