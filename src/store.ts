import { createStore, combineReducers } from 'redux';

import { messageToInsert } from './data-mocks/messages';
import {
    Message,
    SET_MESSAGES,
    DELETE_MESSAGE,
    ADD_SERVICE_MESSAGE,
    SetMessagesAction,
    DeleteMessageAction,
    AddServiceMessageAction,
} from './types';

const UPDATE_RATE = 'UPDATE_RATE';

type UpdateRateAction = {
    type: typeof UPDATE_RATE;
    payload: string;
};

const rateReducer = (state = '0', action: UpdateRateAction) => {
    switch (action.type) {
        case UPDATE_RATE:
            return action.payload;
        default:
            return state;
    }
};

type MessagesAction = SetMessagesAction | DeleteMessageAction | AddServiceMessageAction;

const messagesReducer = (state: Message[] = [], action: MessagesAction): Message[] => {
    switch (action.type) {
        case SET_MESSAGES:
            return action.payload;
        case DELETE_MESSAGE:
            return state.reduce((newState: Message[], message) => {
                if (action.payload === message.id) {
                    return newState;
                } else if (
                    typeof action.payload === 'string' &&
                    message.id === +action.payload.replace('serviceFor', '')
                ) {
                    return [...newState, { ...message, serviceAdded: false }];
                } else if (
                    typeof action.payload === 'number' &&
                    message.id === `serviceFor${action.payload}`
                ) {
                    return newState;
                } else return [...newState, message];
            }, []);
        case ADD_SERVICE_MESSAGE:
            return state.reduce((newState: Message[], message) => {
                if (action.payload === message.id) {
                    return [
                        ...newState,
                        { ...message, serviceAdded: true },
                        { ...messageToInsert, id: `serviceFor${action.payload}`, isService: true },
                    ];
                } else {
                    return [...newState, message];
                }
            }, []);
        default:
            return state;
    }
};

const reducers = combineReducers({
    rate: rateReducer,
    messages: messagesReducer,
});

export const store = createStore(reducers, {});
