import './UserDetails.css'

export default function UserDetails({user, getPosts}) {
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

    return (<div className={'user-details-box'}>
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
            <button className={'get-posts-btn'} onClick={() => getPosts(id)}>Get Posts</button>
        </div>
    )
        ;
}
