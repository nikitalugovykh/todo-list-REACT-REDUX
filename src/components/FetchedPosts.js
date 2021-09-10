import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../redux/actions';


import Post from './Post';

export default () => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => {
        return state.posts.fetchedPost
    })
    const loading = useSelector((state) => {
        return state.app.loading
    })
    console.log(loading);
    return (
        loading
        ? <div className="spinner-border" role="status"></div> 
        : ((posts.length) 
            ? posts.map((post) => <Post key = {post.id} post = {post}/>)
            : <div>
                <p>Данные отсутствуют</p>
                <button 
                    className = 'btn btn-primary' 
                    onClick = {()=> {
                        dispatch(fetchPost());
                    }}
                >
                Загрузить</button>
            </div>
        )
    )
}