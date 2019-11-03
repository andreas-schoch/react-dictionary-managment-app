import React from 'react';
import styles from './App.module.scss';
import Footer from './Footer/Footer';

const App = props => {
    return (
        <div className={styles.contentWrapper}>
            <span className={styles.mainContent}>{props.children}</span>
            <Footer />
        </div>
    );
};

export default App;
