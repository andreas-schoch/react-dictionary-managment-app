import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './DetailViewHeader.module.scss';
import { connect } from 'react-redux';
import { objToArrOrdered, getEntryErrorTable } from '../../../helpers';
import { setEntryErrorFlags, updateDictionary, showNotification } from '../../../store/actions';

const DetailViewHeader = ({ currentDictionary, entries, setEntryErrorFlags, updateDictionary, showNotification }) => {
    const handleValidation = evt => {
        const entryErrorTable = getEntryErrorTable(entries);

        const objEntries = Object.entries(entryErrorTable);
        const edited = Date.now();

        if (objEntries.length === 0 && entryErrorTable.constructor === Object) {
            // no errors found, set dictionary.validated to true
            updateDictionary({ ...currentDictionary, validated: true, numErrors: 0, edited });
        } else {
            // dispatch actions to set the  error flags of all entries
            showNotification('errors found');
            updateDictionary({ ...currentDictionary, validated: false, numErrors: objEntries.length, edited });
            objEntries.forEach(([entryId, flags]) => {
                setEntryErrorFlags(entryId, flags);
            });
        }
    };

    const renderValidateButton = dict => {
        if (dict && dict.validated) {
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
        { setEntryErrorFlags, updateDictionary, showNotification }
    )(DetailViewHeader)
);
