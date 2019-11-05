import * as actionTypes from '../actions/types';

const initial = {};

// look for data in localStorage
const persistedState = localStorage.getItem('dictApp') ? JSON.parse(localStorage.getItem('dictApp')).entries : initial;

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
            let entryIds = action.payload.entryIds;
            let clearedEntries = {};
            entryIds.forEach(id => {
                clearedEntries[id] = { ...entries[id], duplicate: false, fork: false, cycle: false, chain: false };
            });
            return { ...entries, ...clearedEntries };
        }

        default:
            return entries;
    }
};
