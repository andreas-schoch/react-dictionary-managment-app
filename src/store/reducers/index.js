import { combineReducers } from 'redux';
import { entryReducer } from './entryReducer';
import { dictionaryReducer } from './dictionaryReducer';

export const rootReducer = combineReducers({
    entries: entryReducer,
    dictionaries: dictionaryReducer
});
