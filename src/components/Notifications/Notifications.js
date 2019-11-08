import React, { useEffect } from 'react';
import styles from './Notifications.module.scss';
import { connect } from 'react-redux';
import { hideNotification } from '../../store/actions';

const Notifications = ({ hideNotification, notification }) => {
    const { message, visible } = notification;

    useEffect(() => {
        let timer = null;
        timer = setTimeout(() => {
            if (notification.visible) {
                hideNotification();
            }
            return () => {
                clearTimeout(timer);
            };
        }, 3000);
    }, [hideNotification, notification]);

    return <>{visible && <div className={styles.notification}>{message}</div>}</>;
};

const mapStateToProps = (state, ownProps) => ({
    notification: state.notification
});

export default connect(
    mapStateToProps,
    { hideNotification }
)(Notifications);
