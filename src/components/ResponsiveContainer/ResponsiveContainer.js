import React from 'react';
import styles from './ResponsiveContainer.module.scss';

const ResponsiveContainer = ({ children, center }) => (
    <div className={`${styles.container} ${center ? styles.center : ''}`}>{children}</div>
);

export default ResponsiveContainer;
