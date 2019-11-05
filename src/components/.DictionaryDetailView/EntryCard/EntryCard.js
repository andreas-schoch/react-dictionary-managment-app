import React, { useState } from 'react';
import styles from './EntryCard.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GenericCard from '../../GenericCard/GenericCard';
import {
    updateEntry,
    updateDictionary,
    removeEntryIdFromDictionary,
    removeEntry,
    clearEntryErrorFlags
} from '../../../store/actions';

const EntryCard = ({
    entry,
    updateEntry,
    currentDictionary,
    updateDictionary,
    removeEntryIdFromDictionary,
    removeEntry,
    clearEntryErrorFlags
}) => {
    const [entryModified, setEntryModified] = useState(false); // true if data different from redux state
    const { domain, range, entryId, duplicate, fork, chain, cycle } = entry;
    const flagClass = 'fas fa-exclamation-triangle';

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log('submit entry update');
    };

    const handleChange = evt => {
        // inputs are uncontrolled, this function only checks if values are different from redux state
        const { name, value } = evt.target;
        if ((value !== domain && name === 'domain') || (value !== range && name === 'range')) {
            setEntryModified(true);
            console.log('entry modified');
        }
    };

    const handleFocus = evt => {
        console.log('focus');
    };

    const handleBlur = evt => {
        // update redux state when input loses focus
        if (entryModified) {
            const edited = Date.now();
            updateEntry({ ...entry, edited, [evt.target.name]: evt.target.value });
            updateDictionary({ ...currentDictionary, validated: false, numErrors: 0 });
            clearEntryErrorFlags(currentDictionary.entryIds);
        }
        console.log('blur');
    };

    const handleDelete = evt => {
        evt.preventDefault();
        removeEntryIdFromDictionary(entry.id, currentDictionary.id);
        removeEntry(entry);
    };

    const handleKeyPress = evt => {
        // update redux state when enter pressed while input was in focus
        console.log(evt.key);
        // TODO test if blur and keypress evts work on mobile as intended
        if (evt.key === 'Enter') {
            evt.target.blur();
        }
    };

    const chooseErrorClassName = entry => {
        // const errStr = entry.errors.join('');
        // if (errStr.includes('duplicate')) {
        //     return styles.warning;
        // } else if (errStr.includes('fork') || errStr.includes('cycle') || errStr.includes('chain')) {
        //     return styles.error;
        // } else {
        //     return styles.hidden;
        // }
        return styles.hidden;
    };

    return (
        <GenericCard>
            <GenericCard.Content>
                <div className={styles.flexWrap}>
                    <input
                        type='text'
                        name='domain'
                        className={`${styles.entryInput} ${chooseErrorClassName(entry)}`}
                        defaultValue={entry.domain}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <input
                        type='text'
                        name='range'
                        className={`${styles.entryInput} ${chooseErrorClassName(entry)}`}
                        defaultValue={entry.range}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <div className={styles.flags}>
                        <i
                            className={`${flagClass} ${styles.warning} ${duplicate ? '' : styles.hidden}`}
                            title='Duplicate: identical Domain/Range pair already exists'
                        />
                        <i
                            className={`${flagClass} ${styles.error} ${fork ? '' : styles.hidden}`}
                            title='Fork: The Domain is already in use'
                        />
                        <i
                            className={`${flagClass} ${styles.error} ${chain ? '' : styles.hidden}`}
                            title='Chain: the Range is already a Domain in another row'
                        />
                        <i
                            className={`${flagClass} ${styles.severeError} ${cycle ? '' : styles.hidden}`}
                            title='Cycle: Infinite loop detected'
                        />
                    </div>

                    <button className={styles.btnDelete} onClick={handleDelete}>
                        <i className='far fa-trash-alt'> </i>
                    </button>
                </div>
            </GenericCard.Content>
        </GenericCard>
    );
};

const mapStateToProps = (state, ownProps) => ({
    currentDictionary: state.dictionaries[ownProps.match.params.id]
});

export default withRouter(
    connect(
        mapStateToProps,
        { updateEntry, updateDictionary, removeEntryIdFromDictionary, removeEntry, clearEntryErrorFlags }
    )(EntryCard)
);
