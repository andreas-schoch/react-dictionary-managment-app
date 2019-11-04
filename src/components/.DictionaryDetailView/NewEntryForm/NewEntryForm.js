import React, { useState } from 'react';
import styles from './NewEntryForm.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addEntry, addEntryReferenceToDictionary } from '../../../store/actions/index';
import uuid from 'uuid';

const NewEntryForm = ({ currentDictionary, addEntry, addEntryReferenceToDictionary }) => {
    const [state, setState] = useState({
        domain: '',
        range: '',
        error: ''
    });

    const [error, setError] = useState([]);

    const handleChange = evt => {
        if (evt.target.value.length <= 20) {
            console.log(state);
            setState({ ...state, [evt.target.name]: evt.target.value });
        } else {
            setState({ error: 'Domain and Range cannot have more than 20 characters each' }); // TODO display error to user
            console.log(error);
        }
    };

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
                errorSeverity: 0,
                errors: []
            };

            addEntry(newEntry);
            addEntryReferenceToDictionary(newEntry.id, currentDictionary.id);
            setState({ domain: '', range: '', error: '' });
            console.log('submit');
        }
    };

    const isFormValid = ({ domain, range }) => domain && range;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type='text' value={state.domain} placeholder='Domain' onChange={handleChange} name='domain' className={styles.input} />

            <input type='text' value={state.range} placeholder='Range' onChange={handleChange} name='range' className={styles.input} />
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
        { addEntry, addEntryReferenceToDictionary }
    )(NewEntryForm)
);

// export default withRouter(connect(mapStateToProps)(NewEntryForm));
