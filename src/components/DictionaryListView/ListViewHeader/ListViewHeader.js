import React from 'react';
import styles from './ListViewHeader.module.scss';

const ListViewHeader = ({ currentDictionary }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.heading}>{'Dictionaries'}</h1>
        </header>
    );
};

export default ListViewHeader;
