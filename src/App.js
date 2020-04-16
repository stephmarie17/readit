import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Header from './components/layout/Header';
import Settings from './components/Settings';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://www.reddit.com/r/all/hot.json?sort=new');
    const postData = res.data.data.children;
    setPosts(postData);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
    // es-lint-ignore-next-line
  },[]);

  console.log(posts);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Click event to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle change event to update posts displayed per page
  const selectPostsPerPage = (event) => {
    event.preventDefault()
    setPostsPerPage(event.target.value)
  }

  return (
    <div>
      <Header />
      <Settings postsPerPage={postsPerPage} selectPostsPerPage={selectPostsPerPage}/>     
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App;
