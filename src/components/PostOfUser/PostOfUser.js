import './PostOfUser.css';

const PostOfUser = ({post: {userId, id, title, body}}) => {
    return (
        <div className={'post-of-user-box'}>
            <h1>UserId: {userId}.</h1>
            <h2>{id}. {title}</h2>
            <p><i>Body:</i> {body}</p>
        </div>
    );
};

export {PostOfUser};
