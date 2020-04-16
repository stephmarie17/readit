import React from 'react'
import './pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-display">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination-item">
                        <a onClick={() => paginate(number)} href="!#" className="pagination-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
