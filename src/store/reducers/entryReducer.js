import * as actionTypes from '../actions/types';

const initial = {};

export const entriesReducer = (entries = initial, action) => {
    switch (action.type) {
        case ADD_ENTRY:
            return { ...entries, ...action.payload.newEntry };
        default:
            return entries;
    }
};
