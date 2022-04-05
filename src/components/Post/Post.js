export default function Post({post: {id, title, body}}) {
    return (
        <div className={'post-box'}>
            <h1>{id}. {title}</h1>
            <p>{body}</p>
        </div>
    );
}
