import {useEffect, useState} from 'react';
import {getUsers} from '../../services/fetch.api';
import User from '../User/User';
import './Users.css';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(users => setUsers(users));
    }, []);

    return (
        <div className={'users-box'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}
