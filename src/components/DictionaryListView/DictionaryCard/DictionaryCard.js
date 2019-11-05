import React from 'react';
import styles from './DictionaryCard.module.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ValidityTag from './ValidityTag/ValidityTag';
import GenericCard from '../../GenericCard/GenericCard';
import { connect } from 'react-redux';
import { removeDictionary } from '../../../store/actions';

const DictionaryCard = ({ dict, removeDictionary }) => {
    const { name, id, entryIds, edited } = dict;
    const lastEditText = moment(edited).fromNow();

    const handleDelete = evt => {
        evt.preventDefault();
        removeDictionary(dict);
    };

    return (
        <GenericCard>
            <Link to={`dict/${id}`}>
                <GenericCard.Content>
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
                            <i className='fas fa-check'> </i>
                        </button>
                        <button
                            className={`${styles.btn} ${styles.btnDelete}`}
                            title='delete Dictionary'
                            onClick={handleDelete}>
                            <i className='far fa-trash-alt'> </i>
                        </button>
                    </div>
                </GenericCard.Content>
            </Link>
        </GenericCard>
    );
};

export default connect(
    null,
    { removeDictionary }
)(DictionaryCard);
