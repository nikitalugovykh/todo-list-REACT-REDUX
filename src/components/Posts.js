import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';


const Posts = ({ syncPost }) => {
    console.log(syncPost);
    return (
        syncPost.length 
            ? syncPost.map((post) => <Post key = { post.id } post = { post }/>)
            : <p>Данные отсутствуют</p>
    )
}

const mapStatetoProps = state => {
    return {
       syncPost: state.posts.posts 
    }
}

export default connect(mapStatetoProps,null)(Posts)