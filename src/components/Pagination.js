import React from 'react'
import './pagination.css';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    // Init an empty array of numbers to display in Pagination component
    const pageNumbers = [];

    // Loop through then push into page numbers array
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-display">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination-item" id={(currentPage === number ? "active" : "")}>
                        <span onClick={() => paginate(number)} className="pagination-link">
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
