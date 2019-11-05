import React, { useState } from 'react';
import styles from './DictionaryForm.module.scss';
import { connect } from 'react-redux';
import { addDictionary } from '../../../store/actions/index';
import uuid from 'uuid';

const DictionaryForm = ({ dictionaries, addDictionary }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState([]);

    const handleChange = evt => {
        if (evt.target.value.length <= 20) {
            setInputValue(evt.target.value);
        } else {
            setError('Dictionary name cannot have more than 20 characters'); // TODO display error to user
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (isFormValid()) {
            const now = Date.now();
            const newDict = {
                name: inputValue,
                id: uuid(),
                created: now,
                edited: now,
                validated: false,
                numErrors: 0,
                entryIds: []
            };

            addDictionary(newDict);
            setInputValue('');
        }
    };

    const isFormValid = () => inputValue.length !== 0;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type='text'
                value={inputValue}
                placeholder='new Dictionary Name'
                onChange={handleChange}
                name='name'
                className={styles.nameInput}
            />
            <button type='submit'>
                <span> Add</span>
            </button>
        </form>
    );
};

export default connect(
    null,
    { addDictionary }
)(DictionaryForm);
