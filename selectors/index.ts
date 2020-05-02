import {createSelector} from 'reselect';

export const selectState = () => state => state.postReducer;

export const selectPostList = () =>
    createSelector(
        selectState(),
        (data) => {
            return data;
        },
    );
