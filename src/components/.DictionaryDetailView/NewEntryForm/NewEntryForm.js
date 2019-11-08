import React, { useState, useRef } from 'react';
import styles from './NewEntryForm.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addEntry, addEntryIdToDictionary, clearEntryErrorFlags } from '../../../store/actions/index';
import uuid from 'uuid';

const NewEntryForm = ({ currentDictionary, addEntry, addEntryIdToDictionary, clearEntryErrorFlags }) => {
    const [state, setState] = useState({
        domain: '',
        range: '',
        error: ''
    });

    const domainInputRef = useRef(null); // used to change focus to domain input after adding an entry

    const handleChange = evt => setState({ ...state, [evt.target.name]: evt.target.value });

    const handleSubmit = evt => {
        evt.preventDefault();
        if (isFormValid(state)) {
            const now = Date.now();
            const newEntry = {
                domain: state.domain,
                range: state.range,
                id: uuid(),
                created: now,
                edited: now,
                duplicate: false,
                fork: false,
                chain: false,
                cycle: false
            };

            addEntry(newEntry);
            addEntryIdToDictionary(newEntry.id, currentDictionary.id);
            clearEntryErrorFlags(currentDictionary.entryIds);
            setState({ domain: '', range: '' });

            // change focus back to domain input
            domainInputRef.current.focus();
        }
    };

    const isFormValid = ({ domain, range }) => domain && range;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <span className={styles.inputContainer}>
                <input
                    type='text'
                    maxLength={20}
                    value={state.domain}
                    placeholder='Domain'
                    onChange={handleChange}
                    name='domain'
                    className={styles.input}
                    ref={domainInputRef}
                />

                <input
                    type='text'
                    maxLength={20}
                    value={state.range}
                    placeholder='Range'
                    onChange={handleChange}
                    name='range'
                    className={styles.input}
                />
            </span>
            <button type='submit'>
                <span> Add</span>
            </button>
        </form>
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        currentDictionary: state.dictionaries[id]
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { addEntry, addEntryIdToDictionary, clearEntryErrorFlags }
    )(NewEntryForm)
);
