import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './DetailViewHeader.module.scss';
import { connect } from 'react-redux';
import { objToArrOrdered, findDuplicates, findForks, findCycles, findChains } from '../../../helpers';
import { setEntryErrorFlags, updateDictionary } from '../../../store/actions';

const DetailViewHeader = ({ currentDictionary, entries, setEntryErrorFlags, updateDictionary }) => {
    const handleValidation = evt => {
        const entryErrorTable = {};

        // TODO consider refactoring the validation helpers. Right now some part is here and another part is somewhere else
        // duplicates
        findDuplicates(entries).forEach(id => {
            if (!entryErrorTable[id]) {
                entryErrorTable[id] = {};
            }
            entryErrorTable[id].duplicate = true;
        });

        // forks
        findForks(entries).forEach(id => {
            if (!entryErrorTable[id]) {
                entryErrorTable[id] = {};
            }
            entryErrorTable[id].fork = true;
        });

        // cycles
        findCycles(entries).forEach(id => {
            if (!entryErrorTable[id]) {
                entryErrorTable[id] = {};
            }
            entryErrorTable[id].cycle = true;
        });

        // chains
        findChains(entries).forEach(id => {
            if (!entryErrorTable[id]) {
                entryErrorTable[id] = {};
            }
            entryErrorTable[id].chain = true;
        });

        // dispatch action  to set the  error flags of all entries
        const objEntries = Object.entries(entryErrorTable);
        const edited = Date.now();

        // set the dictionary.validated to true of no errors found
        if (objEntries.length === 0 && entryErrorTable.constructor === Object) {
            updateDictionary({ ...currentDictionary, validated: true, numErrors: 0, edited });
        } else {
            updateDictionary({ ...currentDictionary, validated: false, numErrors: objEntries.length, edited });

            objEntries.forEach(([entryId, flags]) => {
                setEntryErrorFlags(entryId, flags);
            });
        }
    };

    // 1: dict is validated 2: not validated yet 3:  errors found
    const renderValidateButton = dict => {
        if (dict.validated) {
            return <button className={`${styles.btnValidate} ${styles.valid}`}>Validated</button>;
        } else {
            return (
                <button className={styles.btnValidate} onClick={handleValidation}>
                    Validate
                </button>
            );
        }
    };

    return (
        <header className={styles.header}>
            <Link to='/' className={styles.btnReturn}>
                <i className='fas fa-chevron-left'> </i>
                <span> back</span>
            </Link>

            <h1 className={styles.dictName}>{currentDictionary ? currentDictionary.name : ''}</h1>
            {renderValidateButton(currentDictionary)}
        </header>
    );
};

const mapStateToProps = (state, ownProps) => {
    const currentDict = state.dictionaries[ownProps.match.params.id];

    return {
        currentDictionary: currentDict,
        entries: currentDict ? objToArrOrdered(state.entries, currentDict.entryIds) : []
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { setEntryErrorFlags, updateDictionary }
    )(DetailViewHeader)
);
