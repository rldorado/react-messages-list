import { createStore, combineReducers } from 'redux';

import { Message, SetMessagesAction, SET_MESSAGES } from './types';

const UPDATE_RATE = 'UPDATE_RATE';

type UpdateRateAction = {
    type: typeof UPDATE_RATE;
    payload: string;
};

const rateReducer = (state = '0', action: UpdateRateAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

const messagesReducer = (state: Message[] = [], action: SetMessagesAction) => {
    switch (action.type) {
        case SET_MESSAGES:
            return action.payload;
        default:
            return state;
    }
};

const reducers = combineReducers({
    rate: rateReducer,
    messages: messagesReducer,
});

export const store = createStore(reducers, {});
