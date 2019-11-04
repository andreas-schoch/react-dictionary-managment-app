import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './ListViewHeader.module.scss';
import { connect } from 'react-redux';

const ListViewHeader = ({ currentDictionary }) => {
    console.log(currentDictionary);
    return (
        <header className={styles.header}>
            <div className={styles.heading}>{'Dictionaries'}</div>
        </header>
    );
};

export default ListViewHeader;
