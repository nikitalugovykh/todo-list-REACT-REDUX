import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../redux/actions';


import Post from './Post';

export default () => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => {
        return state.posts.fetchedPost
    })

    return (
        (posts.length) 
            ? posts.map((post,i) => <Post key = {post.id} post = {post}/>)
            : <div>
                <p>Данные отсутствуют</p>
                <button 
                    className = 'btn btn-primary' 
                    onClick = {()=> dispatch(fetchPost())}
                >
                Загрузить</button>
            </div>
    )
}