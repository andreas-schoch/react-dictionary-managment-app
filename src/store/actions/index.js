import * as actionTypes from './types';

// Entry Actions
export const addEntry = newEntry => ({
    type: actionTypes.ADD_ENTRY,
    payload: { newEntry }
});

export const updateEntry = updatedEntry => ({
    type: actionTypes.UPDATE_ENTRY,
    payload: { updatedEntry }
});

export const removeEntry = removedEntry => ({
    type: actionTypes.REMOVE_ENTRY,
    payload: { removedEntry }
});

export const setEntryErrorFlags = (entryId, flags) => ({
    type: actionTypes.SET_ENTRY_ERROR_FLAGS,
    payload: { entryId, flags }
});

export const clearEntryErrorFlags = entryIds => ({
    type: actionTypes.CLEAR_ENTRY_ERROR_FLAGS,
    payload: { entryIds }
});

// Dictionary Actions
export const addDictionary = newDictionary => ({
    type: actionTypes.ADD_DICTIONARY,
    payload: { newDictionary }
});

export const updateDictionary = updatedDictionary => ({
    type: actionTypes.UPDATE_DICTIONARY,
    payload: { updatedDictionary }
});

export const removeDictionary = removedDictionary => ({
    type: actionTypes.REMOVE_DICTIONARY,
    payload: { removedDictionary }
});

export const addEntryIdToDictionary = (entryId, dictId) => ({
    type: actionTypes.ADD_ENTRY_ID_TO_DICTIONARY,
    payload: { entryId, dictId }
});

export const removeEntryIdFromDictionary = (entryId, dictId) => ({
    type: actionTypes.REMOVE_ENTRY_ID_FROM_DICTIONARY,
    payload: { entryId, dictId }
});
