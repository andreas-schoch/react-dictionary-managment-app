import * as actionTypes from '../actions/types';
import uuid from 'uuid';

const timestamp = Date.now(),
    id1 = uuid(),
    id2 = uuid(),
    id3 = uuid();

const initial = {
    [id1]: {
        name: 'My Dictionary 1',
        id: id1,
        created: timestamp - 3,
        edited: timestamp - 3,
        numErrors: 0,
        validated: false,
        entryIds: []
    },
    [id2]: {
        name: 'My Dictionary 2',
        id: id2,
        created: timestamp - 2,
        edited: timestamp - 2,
        numErrors: 0,
        validated: false,
        entryIds: []
    },
    [id3]: {
        name: 'My Dictionary 3',
        id: id3,
        created: timestamp - 1,
        edited: timestamp - 1,
        numErrors: 0,
        validated: false,
        entryIds: []
    }
};

// look for data in localStorage
const persistedState = localStorage.getItem('dictApp')
    ? JSON.parse(localStorage.getItem('dictApp')).dictionaries
    : initial;

export const dictionaryReducer = (dictionaries = persistedState, action) => {
    switch (action.type) {
        case actionTypes.ADD_DICTIONARY: {
            const dict = action.payload.newDictionary;
            return { ...dictionaries, ...{ [dict.id]: dict } };
        }
        case actionTypes.UPDATE_DICTIONARY: {
            const updatedDict = action.payload.updatedDictionary;
            return { ...dictionaries, [updatedDict.id]: updatedDict };
        }
        case actionTypes.REMOVE_DICTIONARY: {
            const copy = Object.assign({}, { ...dictionaries });
            delete copy[action.payload.removedDictionary.id];
            return copy;
        }
        case actionTypes.ADD_ENTRY_ID_TO_DICTIONARY: {
            const { entryId, dictId } = action.payload;
            const edited = Date.now();
            const entryIds = dictionaries[dictId].entryIds.concat(entryId);
            return {
                ...dictionaries,
                [dictId]: { ...dictionaries[dictId], edited, entryIds, validated: false, numErrors: 0 }
            };
        }
        case actionTypes.REMOVE_ENTRY_ID_FROM_DICTIONARY: {
            const { entryId, dictId } = action.payload;
            const edited = Date.now();
            const entryIds = [...dictionaries[dictId].entryIds];
            const index = entryIds.indexOf(entryId);
            entryIds.splice(index, 1);
            return { ...dictionaries, [dictId]: { ...dictionaries[dictId], edited, entryIds } };
        }
        default:
            return dictionaries;
    }
};
