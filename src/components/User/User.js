import {Link} from 'react-router-dom';

import './User.css';

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={'user-box'}>
            <h1>{id}. {name} {username}</h1>
            <Link to={id.toString()} state={user}>DETAILS</Link>
        </div>
    );
};

export {User};
