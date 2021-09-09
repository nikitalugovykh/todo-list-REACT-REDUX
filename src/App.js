import React from 'react';
import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';
import Posts from './components/Posts';


const App = (props) => {
  return (
    <div className='container pt-3' >
      <div className='row'>
        <div className='col'>
          <PostForm createPost/>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Синхронные посты</h2>
          <Posts/>
        </div>
        <div className='col'>
          <h2>Ассинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div> 
    </div>
  )
}


export default App