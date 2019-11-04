import React from 'react';
import styles from './ValidityTag.module.scss';

const ValidityTag = ({ dict }) => {
    // const { validated, errors } = dict;

    const renderInvalidTag = dict => {
        if (dict.validated) {
            return <span className={`${styles.valid} ${styles.base}`}>validated</span>;
        } else if (!dict.validated && dict.errors.length === 0) {
            return <span className={`${styles.unchecked} ${styles.base}`}>not validated yet</span>;
        } else {
            const singular = dict.errors.length === 1;
            return (
                <span className={`${styles.error} ${styles.base}`}>
                    <span>{dict.errors.length}</span>
                    <span> {singular ? 'Error' : 'Errors'}</span>
                </span>
            );
        }
    };

    return <>{renderInvalidTag(dict)}</>;
};

export default ValidityTag;
