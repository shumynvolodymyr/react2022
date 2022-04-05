export default function Comment({comment: {id, name, email, body}}) {
    return (
        <div>
            <h1>{id}. {name}</h1>
            <h2>Email: {email}</h2>
            <p>Body: {body}</p>
        </div>
    );
}
