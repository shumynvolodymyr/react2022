import {useEffect, useState} from 'react';

import {userService} from '../../services';
import './Users.css';
import {User} from '../User/User';

const Users = () => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        userService.getUsers().then(({data}) => setUsers(data));
    }, []);
    return (
        <div className={'users-box'}>
            {users && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
