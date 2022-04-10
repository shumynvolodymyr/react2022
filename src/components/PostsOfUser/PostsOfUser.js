import PostOfUser from '../PostOfUser/PostOfUser';
import './PostsOfUser.css'

export default function PostsOfUser({posts}) {
    return (
        <div className={'posts-of-user'}>
            {posts.map(post => <PostOfUser key={post.id} post={post}/>)}
        </div>
    );
}
