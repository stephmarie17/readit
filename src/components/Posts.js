import React from 'react';
import Spinner from './layout/Spinner';
import './posts.css';

const Posts = ({ posts, loading }) => {

    if(loading) {
        return (
            <Spinner />
        )
    }
    return (
        <div className="post-display">
        <ul className="posts">
            {posts.map(post => (
                <li key={post.data.id} className="post-item">
                {post.data.thumbnail? <img src={post.data.thumbnail} alt="thumbnail" /> :
                <img src="https://via.placeholder.com/100" alt="placeholder"/>}
                <h4>{post.data.title}</h4>
                <a href={`https://reddit.com${post.data.permalink}`} alt="reddit post link">Read more...</a>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default Posts
