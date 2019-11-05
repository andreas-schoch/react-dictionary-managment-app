import * as actionTypes from '../actions/types';

const initial = {};

// look for data in localStorage
const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState')).entries
    : initial;

export const entryReducer = (entries = persistedState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ENTRY: {
            const entry = action.payload.newEntry;
            return { ...entries, [entry.id]: entry };
        }
        case actionTypes.UPDATE_ENTRY: {
            const entry = action.payload.updatedEntry;
            return { ...entries, [entry.id]: entry };
        }

        case actionTypes.REMOVE_ENTRY: {
            const copy = Object.assign({}, { ...entries });
            delete copy[action.payload.removedEntry.id];
            return copy;
        }

        case actionTypes.SET_ENTRY_ERROR_FLAGS: {
            let { entryId, flags } = action.payload;
            const entry = { ...entries[entryId], ...flags };
            return { ...entries, [entry.id]: entry };
        }

        case actionTypes.CLEAR_ENTRY_ERROR_FLAGS: {
            let { entryId, flags } = action.payload;
            const entry = { ...entries[entryId], ...flags };
            return { ...entries, [entry.id]: entry };
        }

        // case actionTypes.CLEAR_ENTRY_ERRORS: {
        //     const entry = { ...action.payload.clearedEntry, errors: [], severity: 0 };
        //     return { ...entries, [entry.id]: entry };
        // }

        default:
            return entries;
    }
};
