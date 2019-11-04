import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './DetailViewHeader.module.scss';
import { connect } from 'react-redux';

const DetailViewHeader = ({ currentDictionary }) => {
    return (
        <header className={styles.header}>
            <Link to='/' className={styles.btnReturn}>
                <i className='fas fa-chevron-left'> </i>
                <span> back</span>
            </Link>

            <div className={styles.dictName}>{currentDictionary ? currentDictionary.name : ''}</div>
        </header>
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        currentDictionary: state.dictionaries[id]
    };
};

export default withRouter(connect(mapStateToProps)(DetailViewHeader));
