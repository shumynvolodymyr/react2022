import './CommentOfPost.css';

const CommentOfPost = ({comment: {postId, id, name, email, body}}) => {
    return (
        <div className={'comment-of-user-box'}>
            <h1>{id}. {name}</h1>
            <h2>PostId: {postId}</h2>
            <h3>Email: {email}</h3>
            <p><i>Body:</i> {body}</p>
        </div>
    );
};

export {CommentOfPost};
