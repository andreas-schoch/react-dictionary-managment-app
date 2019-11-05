import React from 'react';
import styles from './GenericCard.module.scss';

const GenericCard = ({ children }) => {
    return <div className={styles.card}>{children}</div>;
};

GenericCard.Content = ({ children }) => <div className={styles.content}>{children}</div>;

export default GenericCard;
