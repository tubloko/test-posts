import React, {useEffect} from "react";
import {connect} from 'react-redux';
import { useRouter } from 'next/router';
import {showCurrentPost} from "../../actions";
import Link from "next/link";

const PostId = (props) => {
    const {showCurrentPost, dispatch, state} = props;
    const router = useRouter();
    const { postId } = router.query;

    useEffect(() => {
        dispatch(showCurrentPost(postId));
    }, []);

    const {post} = state.postReducer;
    if (!post.comments) return <p>Loading...</p>;
    return (
        <div>
            <Link href='/pages/PostList.tsx' as='/'>
                <a style={{fontSize: '20px', color: 'white'}}>{`<- Back`}</a>
            </Link>
            <h3 className='mt-4'>Post detail: {post.title}</h3>
            <div>
                <p>{post.body}</p>
            </div>
            <p className='mt-4'>Comments: </p>
            <ul className='list-group col-6'>
                {
                    post.comments.map(({body, id}) => {
                        return <li key={id} className='list-group-item'>{body}</li>
                    })
                }
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {state};
};

const mapDispatchToProps = (dispatch => {
    return {
        showCurrentPost,
        dispatch,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostId);
