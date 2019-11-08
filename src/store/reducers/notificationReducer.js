import * as actionTypes from '../actions/types';

const initial = {
    visible: false,
    message: 'error'
};

export const notificationReducer = (notification = initial, action) => {
    switch (action.type) {
        case actionTypes.SHOW_NOTIFICATION: {
            return { visible: true, message: action.payload.message };
        }
        case actionTypes.HIDE_NOTIFICATION: {
            return { visible: false, message: '' };
        }

        default:
            return notification;
    }
};
