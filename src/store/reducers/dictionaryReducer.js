import * as actionTypes from '../actions/types';
import uuid from 'uuid';

const timestamp = Date.now(), // timestamp instead of uuid only used for initial state for convinience
    id1 = uuid(),
    id2 = uuid(),
    id3 = uuid();

const initial = {
    [id1]: {
        name: 'dict1',
        id: id1,
        created: timestamp - 3,
        edited: timestamp - 3,
        errors: [],
        validated: false,
        entryIds: []
    },
    [id2]: {
        name: 'dict2',
        id: id2,
        created: timestamp - 2,
        edited: timestamp - 2,
        errors: [],
        validated: false,
        entryIds: []
    },
    [id3]: {
        name: 'dict3',
        id: id3,
        created: timestamp - 1,
        edited: timestamp - 1,
        errors: [],
        validated: false,
        entryIds: []
    }
};

export const dictionaryReducer = (dictionaries = initial, action) => {
    switch (action.type) {
        case actionTypes.ADD_DICTIONARY:
            const dict = action.payload.newDictionary;
            return { ...dictionaries, ...{ [dict.id]: dict } };

        case actionTypes.RENAME_DICTIONARY:
            const renamedDict = dictionaries[action.payload.id];
            renamedDict.name = action.payload.name;
            return { ...dictionaries, ...renamedDict };

        case actionTypes.ADD_ENTRY_REFERENCE_TO_DICTIONARY:
            const { entryId, dictId } = action.payload;
            const edited = Date.now();
            const entryIds = dictionaries[dictId].entryIds.concat(entryId);
            return { ...dictionaries, [dictId]: { ...dictionaries[dictId], edited, entryIds } };

        default:
            return dictionaries;
    }
};
