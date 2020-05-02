import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {compose, pure} from 'recompose';
import {loadPosts, deletePostById} from '../actions';
import {selectPostList} from '../selectors';
import Page from '../components/page';

export default compose(
    connect(
        createSelector(
            selectPostList(),
            (data) => {
                return {data};
            },
        ),
        {
            loadPosts,
            deletePostById,
        },
    ),
    pure,
)(Page);


