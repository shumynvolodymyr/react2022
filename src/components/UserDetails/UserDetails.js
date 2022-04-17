import {useLocation, Link, Outlet} from 'react-router-dom';

import './UserDetails.css';

const UserDetails = () => {
    const {state: user} = useLocation();

    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: companyName, catchPhrase, bs}
    } = user;

    return (
        <div className={'container'}>
            <div className={'user-details-box'}>
                <h1>{id}. {name} {username}</h1>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <p> Address:</p>
                <ul>
                    <li>Street: {street}</li>
                    <li>Suite: {suite}</li>
                    <li>City: {city}</li>
                    <li>Zipcode: {zipcode}</li>
                </ul>
                <p> Geo:</p>
                <ul>
                    <li>lat: {lat}</li>
                    <li>lng: {lng}</li>
                </ul>
                <p>Company:</p>
                <ul>
                    <li>name: {companyName}</li>
                    <li>catchPhrase: {catchPhrase}</li>
                    <li>bs: {bs}</li>
                </ul>
                <Link to={'posts'} state={user}>Posts of user</Link>
            </div>
            <Outlet/>
        </div>
    )
        ;
}

export {UserDetails};
