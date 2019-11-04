import * as actionTypes from './types';

// Entry Actions
export const addEntry = newEntry => ({
    type: actionTypes.ADD_ENTRY,
    payload: { newEntry }
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

// Dictionary Actions
export const addDictionary = newDictionary => ({
    type: actionTypes.ADD_DICTIONARY,
    payload: { newDictionary }
});

export const addEntryReferenceToDictionary = (entryId, dictId) => ({
    type: actionTypes.ADD_ENTRY_REFERENCE_TO_DICTIONARY,
    payload: { entryId, dictId }
});
