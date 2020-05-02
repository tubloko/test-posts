import React from 'react';
import Link from 'next/link';
import { deletePostById } from "../actions";
import {connect} from 'react-redux';

const PostList = (props) => {
    const {data, deletePostById, dispatch} = props;

    const handleClickDelete = event => {
        event.preventDefault();
        dispatch(deletePostById(event.target.value));
    };

    if (!data.post) return <p>loading...</p>;
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-6">
                    <h2 className='mt-2 mb-2'>Create new post</h2>
                    <Link href='/CreateNewPost' as='/posts/new'>
                        <a style={{fontSize: '24px'}}>Add post</a>
                    </Link>
                </div>
            </div>
            <div className='row text-center'>
                {
                    data.post.map(({title, id, body}) => {
                        return (
                            <form key={id} className='mb-3 mt-3 col-6 text-center'
                                  style={{borderRadius: '30px', border: '1px solid gray'}}>
                                <div className="card-body">
                                    <div className='mt-3 mb-2 d-flex'>
                                        <Link href='/pages/posts/[postId].tsx' as={`/posts/${id}`}>
                                            <a className='ml-4 btn btn-outline-success'>Show detail</a>
                                        </Link>
                                        <button className='ml-4 btn btn-outline-warning'>Edit</button>
                                        <button className='float-right ml-3 btn btn-outline-danger' value={id}
                                                onClick={handleClickDelete}>Delete
                                        </button>
                                    </div>
                                    <h3 className='card-title mt-2 mb-2'>{title}</h3>
                                    <div className="card-text">{body}</div>
                                </div>
                            </form>
                        );
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {store};
};

const mapDispatchToProps = (dispatch => {
    return {
        deletePostById,
        dispatch,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
