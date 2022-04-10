import './User.css';

export default function User({user, getUser}) {
    const {id, name, username} = user;

    return (
        <div className={'user-box'}>
            <h1>{id}. {name} {username}</h1>
            <button onClick={() => getUser(user)}>GetDetails</button>
        </div>
    );
}
