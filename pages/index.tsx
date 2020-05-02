import PostAPI from "../api/postAPI";
import {NextPageContext, NextComponentType} from 'next';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import Page from '../containers/page';
import {loadPosts} from '../actions';
import {Store} from '../store';

const api = new PostAPI();

interface IndexPageContext extends NextPageContext {
    store: Store;
}

const IndexPage: NextComponentType<IndexPageContext> = compose()(Page);

IndexPage.getInitialProps = async ({store, req}) => {
    const isServer: boolean = !!req;
    store.dispatch(loadPosts(Object.assign(store.getState().postReducer.post, await api.getAllPosts())));

    return {
        isServer,
    };
};

export default connect()(IndexPage);
