import React from 'react';
import styles from './DictionaryListView.module.scss';
import { connect } from 'react-redux';
import { objToArr } from '../../helpers';
import DictionaryCard from './DictionaryCard/DictionaryCard';
import DictionaryForm from './DictionaryForm/DictionaryForm';
import Header from './ListViewHeader/ListViewHeader.js';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer.js';

const DictionaryListView = ({ dictionaries }) => (
    <div className={styles.container}>
        <Header />
        <ResponsiveContainer center={true}>
            <DictionaryForm />
            {dictionaries && dictionaries.map(dict => <DictionaryCard dict={dict} key={dict.id} />)}
        </ResponsiveContainer>
    </div>
);

const mapStateToProps = state => {
    const convertedDicts = objToArr(state.dictionaries);

    // sorts recently edited dictionaries to be rendered on top     // TODO (bonus) implement sort by name, numEntries, creation
    const sortedDictionaries = convertedDicts.sort((dictA, dictB) => dictB.edited - dictA.edited);
    return {
        dictionaries: sortedDictionaries
    };
};

export default connect(
    mapStateToProps,
    {}
)(DictionaryListView);
