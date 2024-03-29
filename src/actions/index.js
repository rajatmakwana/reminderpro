import { ADD_REMINDER } from '../constant';
import { DELETE_REMINDER } from '../constant';
import { CLEAR_REMINDERS } from '../constant';

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    return action;
}

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    }
    return action;
}