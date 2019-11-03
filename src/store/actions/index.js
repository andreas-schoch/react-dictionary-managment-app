import * as actionTypes from './types';

// Single Dict Entry Actions
export const addEntry = newEntry => ({
    type: actionTypes.ADD_ENTRY,
    payload: {
        entryData: newEntry
    }
});

export const updateEntry = updatedEntry => ({
    type: actionTypes.UPDATE_ENTRY,
    payload: {
        entryData: updatedEntry
    }
});

export const removeEntry = entryID => ({
    type: actionTypes.REMOVE_ENTRY,
    payload: { entryID }
});
