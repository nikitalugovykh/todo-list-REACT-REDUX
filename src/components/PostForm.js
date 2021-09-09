import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux'
import { createPost } from '../redux/actions';


class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.changeInputHandler = this.changeInputHandler.bind(this);
    }
    submitHandler = (ev) => {
        ev.preventDefault()
        
        const {title} = this.state;
        
        const newPost = {
            title, id: v4()
        }

        if (title.trim() === '') return 

        this.props.createPost(newPost)

        this.setState( { title: '' } )
    }
    changeInputHandler = (ev) => {
        this.setState(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value 
        }))

    }
    
    render (){
        return (
            <form onSubmit = {this.submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value = { this.state.title }
                        name = 'title'
                        onChange = { this.changeInputHandler }
                    />
                    <button className = 'btn btn-success mt-3' type = 'submit'>Создать</button>
                </div>

            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost: createPost
}

export default connect(null,mapDispatchToProps)(PostForm)
