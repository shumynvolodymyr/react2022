export default function User({user: {id, name, username}}) {
    return (
        <div className={'user-box'}>
            <h1>{id}. {name} - {username}</h1>
        </div>
    );
}
