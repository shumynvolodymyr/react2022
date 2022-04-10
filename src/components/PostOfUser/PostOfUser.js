export default function PostOfUser({post: {id, title, body}}) {
    return (
        <div className={'post-of-user'}>
            <h1>{id}. {title}</h1>
            <p>Body: {body}</p>
        </div>
    );
}
