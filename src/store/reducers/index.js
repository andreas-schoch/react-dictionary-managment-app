import { combineReducers } from 'redux';
import { entryReducer } from './entryReducer';
import { dictionaryReducer } from './dictionaryReducer';
import { notificationReducer } from './notificationReducer';

export const rootReducer = combineReducers({
    entries: entryReducer,
    dictionaries: dictionaryReducer,
    notification: notificationReducer
});
