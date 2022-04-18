import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import {postsService} from '../../services';
import './CommentsOfPost.css';
import {CommentOfPost} from '../';

const CommentsOfPost = () => {
    const [comments, setComments] = useState(null);
    const {id} = useParams();

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
