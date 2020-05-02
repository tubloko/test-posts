import React from 'react';
import {connect} from 'react-redux';
import PostList from '../pages/PostList';

const Page = (props) => {
    return (
        <>
            <PostList {...props} />
        </>
    );
};

export default connect()(Page);
