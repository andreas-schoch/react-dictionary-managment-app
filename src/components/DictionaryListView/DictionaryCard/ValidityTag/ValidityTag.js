import React from 'react';
import styles from './ValidityTag.module.scss';

const ValidityTag = ({ dict }) => {
    const { validated, numErrors } = dict;

    // 1: validated and no errors found, 2: not validated yet, 3:  validation fail some errors found
    const renderInvalidTag = dict => {
        if (validated) {
            return <span className={`${styles.valid} ${styles.base}`}>validated</span>;
        } else if (!validated && numErrors === 0) {
            return <span className={`${styles.unchecked} ${styles.base}`}>not validated yet</span>;
        } else {
            const singular = numErrors === 1;
            return (
                <span className={`${styles.error} ${styles.base}`}>
                    <span>{numErrors}</span>
                    <span> {singular ? 'Error' : 'Errors'}</span>
                </span>
            );
        }
    };

    return <>{renderInvalidTag(dict)}</>;
};

export default ValidityTag;
