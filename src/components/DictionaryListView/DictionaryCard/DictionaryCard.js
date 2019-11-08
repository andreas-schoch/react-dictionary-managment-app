import React from 'react';
import styles from './DictionaryCard.module.scss';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import ValidityTag from './ValidityTag/ValidityTag';
import GenericCard from '../../GenericCard/GenericCard';
import { connect } from 'react-redux';
import { objToArrOrdered } from '../../../helpers';

import { removeDictionary, setEntryErrorFlags, updateDictionary } from '../../../store/actions';

const DictionaryCard = ({ dict, removeDictionary }) => {
    const { name, id, entryIds, edited } = dict;
    const lastEditText = moment(edited).fromNow();

    const handleDelete = evt => {
        evt.preventDefault();
        removeDictionary(dict);
    };

    return (
        <GenericCard style={{ position: 'relative' }}>
            <GenericCard.Content>
                <Link to={`dict/${id}`} style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}></Link>

                <div className={styles.flexWrap}>
                    <div>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.meta}>
                            <span className={styles.mdot}>{`${entryIds.length} entries`}</span>
                            <span className={styles.mdot}>{`edited ${lastEditText}`}</span>
                            <ValidityTag dict={dict} />
                        </div>
                    </div>
                    <button className={`${styles.btn} ${styles.btnValidate}`} title='validate Dictionary'>
                        <i className='fas fa-arrow-down'> </i>
                    </button>
                    <button
                        className={`${styles.btn} ${styles.btnDelete}`}
                        title='delete Dictionary'
                        onClick={handleDelete}>
                        <i className='far fa-trash-alt'> </i>
                    </button>
                </div>
            </GenericCard.Content>
        </GenericCard>
    );
};

const mapStateToProps = (state, ownProps) => {
    // const currentDict = state.dictionaries[ownProps.match.params.id];

    return {
        // currentDictionary: currentDict,
        entries: ownProps.dict ? objToArrOrdered(state.entries, ownProps.dict.entryIds) : []
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { removeDictionary, updateDictionary, setEntryErrorFlags }
    )(DictionaryCard)
);
