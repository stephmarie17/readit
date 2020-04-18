import React from 'react';
import Spinner from './layout/Spinner';
import './posts.css';

const Posts = ({ posts, loading }) => {
    // If posts have not loaded, render a spinner
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
                {/* If no image thumbnail provided, display a placeholder image */}
                {post.data.thumbnail.length > 7 ? <a href={`https://reddit.com${post.data.permalink}`} alt="reddit post link"><img src={post.data.thumbnail} alt="thumbnail" /></a> :
                <a href={`https://reddit.com${post.data.permalink}`} alt="reddit post link"><img src="https://via.placeholder.com/100" alt="placeholder"/></a>}
                <h4>{post.data.title}</h4>
                <a href={`https://reddit.com${post.data.permalink}`} alt="reddit post link">Read more...</a>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default Posts
