import React, { useEffect } from 'react';
import styles from './DictionaryDetailView.module.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NewEntryForm from './NewEntryForm/NewEntryForm.js';
import Header from './DetailViewHeader/DetailViewHeader.js';
import Entries from './Entries/Entries';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer.js';

const DictionaryDetailView = ({ currentDictionary, history }) => {
    useEffect(() => {
        // redirect to homepage if currentDictionary invalid
        if (!currentDictionary) {
            history.push('/');
        }
    }, [currentDictionary]);

    return (
        <div className={styles.container}>
            <Header />
            <ResponsiveContainer center={true}>
                <NewEntryForm />
                <Entries />
            </ResponsiveContainer>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        currentDictionary: state.dictionaries[id]
    };
};

export default withRouter(connect(mapStateToProps)(DictionaryDetailView));
