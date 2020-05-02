import {NextPageContext} from 'next';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import {Provider} from 'react-redux';
import store, {Store} from '../store';
import Head from "next/head";
import React from "react";

interface AppContext extends NextPageContext {
    store: Store;
}

class MyApp extends App<AppContext> {
    render() {
        const {store, Component, ...props} = this.props;
        return (
            <Provider store={store}>
                <Head>
                    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/darkly/bootstrap.min.css"
                          rel="stylesheet"/>
                    <title>Post DB</title>
                </Head>
                <h1 className='text-center'>Post DB</h1>
                <div className='container'>
                    <Component {...props} />
                </div>
            </Provider>
        );
    }
}

export default withRedux(store)(MyApp);
