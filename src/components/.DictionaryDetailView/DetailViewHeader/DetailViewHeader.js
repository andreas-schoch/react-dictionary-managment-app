import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './DetailViewHeader.module.scss';
import { connect } from 'react-redux';
import { objToArrOrdered, findDuplicates, findForks, findCycles, findChains } from '../../../helpers';
import { setEntryErrorFlags } from '../../../store/actions';

const DetailViewHeader = ({ currentDictionary, entries, setEntryErrorFlags }) => {
    const handleValidation = evt => {
        const entryErrorTable = {};

        // TODO consider refactoring the validation helpers. Right now some part is here and another part is somewhere else
        // (what caused the seperation initially was the idea to add a "validate all dicts" button in another component)
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
        Object.entries(entryErrorTable).forEach(([entryId, flags]) => {
            setEntryErrorFlags(entryId, flags);
        });
    };

    return (
        <header className={styles.header}>
            <Link to='/' className={styles.btnReturn}>
                <i className='fas fa-chevron-left'> </i>
                <span> back</span>
            </Link>

            <h1 className={styles.dictName}>{currentDictionary ? currentDictionary.name : ''}</h1>
            <button className={styles.btnValidate} onClick={handleValidation}>
                Validate
            </button>
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
        { setEntryErrorFlags }
    )(DetailViewHeader)
);