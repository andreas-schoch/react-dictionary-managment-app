import React from 'react';
import styles from './DictionaryCard.module.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ValidityTag from './ValidityTag/ValidityTag.js';

const DictionaryCard = ({ dict }) => {
    const { name, id, entryIds } = dict;
    const lastEditText = moment(dict.edited).fromNow();
    return (
        <div className={styles.card}>
            <Link to={`dict/${dict.id}`}>
                <div className={styles.name}>{dict.name}</div>
                <div className={styles.meta}>
                    <span className={styles.mdot}>{`${entryIds.length} entries`}</span>
                    <span className={styles.mdot}>{`edited ${lastEditText}`}</span>
                    <ValidityTag dict={dict} />
                </div>
            </Link>
        </div>
    );
};

export default DictionaryCard;
