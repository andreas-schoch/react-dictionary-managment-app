import * as actionTypes from '../actions/types';

const initial = {};

export const entryReducer = (entries = initial, action) => {
    switch (action.type) {
        case actionTypes.ADD_ENTRY:
            console.log('added entry to reducer');
            const entry = action.payload.newEntry;
            return { ...entries, [entry.id]: entry };
        default:
            return entries;
    }
};
