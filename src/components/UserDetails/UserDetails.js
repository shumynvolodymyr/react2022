import {useLocation, Link, Outlet, useParams} from 'react-router-dom';

import './UserDetails.css';
import {useEffect, useState} from 'react';
import {userService} from '../../services';

const UserDetails = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            userService.getUserById(id).then(({data}) => setUser(data));
        } else {
            setUser(state);
        }
    }, [id, state]);

    return (
        <div className={'container'}>
            {user &&
                <div className={'user-details-box'}>
                    <h1>{id}. {user.name} {user.username}</h1>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p> Address:</p>
                    <ul>
                        <li>Street: {user.address.street}</li>
                        <li>Suite: {user.address.suite}</li>
                        <li>City: {user.address.city}</li>
                        <li>Zipcode: {user.address.zipcode}</li>
                    </ul>
                    <p> Geo:</p>
                    <ul>
                        <li>lat: {user.address.geo.lat}</li>
                        <li>lng: {user.address.geo.lng}</li>
                    </ul>
                    <p>Company:</p>
                    <ul>
                        <li>name: {user.company.name}</li>
                        <li>catchPhrase: {user.company.catchPhrase}</li>
                        <li>bs: {user.company.bs}</li>
                    </ul>
                    <Link to={'posts'} state={user}>Posts of user</Link>
                </div>
            }
            <Outlet/>
        </div>
    )
}

export {UserDetails};
