import React from 'react';
import styles from './EntryCard.module.scss';
import { connect } from 'react-redux';

const EntryCard = ({ entry }) => {
    const { domain, range, entryId } = entry;
    return (
        <div className={styles.card}>
            <input type='text' value='domain1' />
            <input type='text' value='range1' />
        </div>
    );
};

export default connect()(EntryCard);
