import React, { useRef } from 'react';
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
    const { domain, range, entryId, duplicate, fork, chain, cycle } = entry;
    const flagIcon = 'fas fa-exclamation-triangle';
    const domainInputRef = useRef(null);
    const rangeInputRef = useRef(null);

    // inputs are uncontrolled but they are reset when you try to update redux values of domain or range while empty
    const resetEmptyInput = evt => {
        if (evt.target.name === 'domain') {
            domainInputRef.current.value = domain;
        } else {
            rangeInputRef.current.value = range;
        }
    };

    const handleBlur = evt => {
        // update entry redux state when input loses focus
        const { name, value } = evt.target;
        const modified = (value !== domain && name === 'domain') || (value !== range && name === 'range');

        if (modified) {
            if (value) {
                const edited = Date.now();
                updateEntry({ ...entry, edited, [name]: value });
                updateDictionary({ ...currentDictionary, validated: false, numErrors: 0, edited });
                clearEntryErrorFlags(currentDictionary.entryIds);
            } else {
                resetEmptyInput(evt);
            }
        }
    };

    const handleDelete = evt => {
        evt.preventDefault();
        removeEntryIdFromDictionary(entry.id, currentDictionary.id);
        clearEntryErrorFlags(currentDictionary.entryIds);

        removeEntry(entry);
        // handleValidation();
    };

    const handleKeyPress = evt => {
        // update redux state when enter pressed while input was in focus
        if (evt.key === 'Enter') {
            evt.target.blur();
        }
    };

    return (
        <GenericCard>
            <GenericCard.Content>
                <div className={styles.flexWrap}>
                    <input
                        type='text'
                        name='domain'
                        defaultValue={domain}
                        className={styles.entryInput}
                        onKeyPress={handleKeyPress}
                        onBlur={handleBlur}
                        maxLength={20}
                        ref={domainInputRef}
                    />
                    <input
                        type='text'
                        name='range'
                        defaultValue={range}
                        className={styles.entryInput}
                        onKeyPress={handleKeyPress}
                        onBlur={handleBlur}
                        minLength={1}
                        maxLength={20}
                        ref={rangeInputRef}
                    />
                    <div className={styles.flags}>
                        <i
                            className={`${flagIcon} ${styles.warning} ${duplicate ? '' : styles.hidden}`}
                            title='Duplicate: identical Domain/Range pair already exists'
                        />
                        <i
                            className={`${flagIcon} ${styles.error} ${fork ? '' : styles.hidden}`}
                            title='Fork: The Domain is already in use'
                        />
                        <i
                            className={`${flagIcon} ${styles.error} ${chain ? '' : styles.hidden}`}
                            title='Chain: the Range is already a Domain in another row'
                        />
                        <i
                            className={`${flagIcon} ${styles.severeError} ${cycle ? '' : styles.hidden}`}
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
