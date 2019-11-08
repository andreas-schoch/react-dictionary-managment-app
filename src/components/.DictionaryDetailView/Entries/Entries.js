import React, { useEffect } from 'react';
import styles from './Entries.module.scss';
import { withRouter } from 'react-router-dom';
import { objToArrOrdered } from '../../../helpers';

import { connect } from 'react-redux';
import EntryCard from '../EntryCard/EntryCard';

const Entries = ({ entries }) => {
    return (
        <div className={styles.container}>
            {entries.length ? (
                entries.map(entry => <EntryCard key={entry.id} entry={entry} />)
            ) : (
                <span>empty dictionary</span>
            )}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const currentDict = state.dictionaries[ownProps.match.params.id];
    return {
        entries: currentDict ? objToArrOrdered(state.entries, currentDict.entryIds) : [],
        currentDictionary: currentDict
    };
};

export default withRouter(connect(mapStateToProps)(Entries));
