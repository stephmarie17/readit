import React from 'react';
import './settings.css';

const Settings = ({ postsPerPage, selectPostsPerPage }) => {
    return (
        <div className="display-settings">
            <label>
            Posts per page:
            <select value={postsPerPage} onChange={selectPostsPerPage} className="select-posts">
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
            </label>
        </div>
    )
}

export default Settings
