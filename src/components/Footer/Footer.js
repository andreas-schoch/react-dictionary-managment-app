import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer className={styles.mainFooter}>
        <a
            href='https://github.com/andreas-schoch/react-dictionary-managment-app'
            target='_blank'
            rel='noopener noreferrer'
            title='Source Code'>
            <i className='fab fa-github'> </i>
            <span> Source Code</span>
        </a>
    </footer>
);
export default Footer;
