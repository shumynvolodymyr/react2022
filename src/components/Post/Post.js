import {Link} from 'react-router-dom';

import './Post.css';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className={'post-box'}>
            <h1>{id}. {title}</h1>
            <Link to={id.toString()} state={post}>Details</Link>
        </div>
    );
};

export {Post};
