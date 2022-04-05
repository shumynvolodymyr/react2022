import {useEffect, useState} from 'react';
import {getComments} from '../../services/fetch.api';
import './Comments.css';
import Comment from '../Comment/Comment';

export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value));
    }, []);

    return (
        <div className={'comments-box'}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}
