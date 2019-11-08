import React from 'react';
import styles from './App.module.scss';
import Footer from './Footer/Footer';
import Notifications from './Notifications/Notifications';

const App = props => {
    return (
        <div className={styles.contentWrapper}>
            <Notifications />
            <span className={styles.mainContent}>{props.children}</span>
            <Footer />
        </div>
    );
};

export default App;
