import React, {useState} from "react";
import Link from 'next/link';
import {createNewPost} from "../actions";
import {connect} from 'react-redux';

const CreateNewPost = (props) => {
    const {createNewPost, dispatch, state} = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewPost(title, description));
        setDescription('');
        setTitle('');
    };

    return (
        <div>
            <div className='col-6'>
                <Link href='/pages/PostList.tsx' as='/'>
                    <a style={{fontSize: '20px', color: 'white'}}>{`<- Back`}</a>
                </Link>
            </div>
            <div className='row'>
                <form onSubmit={handleSubmit} className="col-6 mt-3" style={{border: '1px solid gray', borderRadius: '30px'}}>
                    <label className='pt-3'>Title</label>
                    <div className="input-group input-group-lg">
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder='Title'
                            value={title}
                            required/>
                    </div>
                    <label>Description</label>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        rows={10}
                        placeholder='Description'
                        value={description}
                        required
                    />
                    <div className="input-group-prepend mt-3">
                        <button className="input-group-text btn-outline-success mb-3">Add post</button>
                    </div>
                </form>
                <div className='col-5 text-center mt-5 mr-3' style={{fontSize: '40px', color: 'green'}}>
                    {state.postReducer.loading ? 'Post was created successfully !' : null}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({state});

const mapDispatchToProps = (dispatch => {
    return {
        createNewPost,
        dispatch
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);
