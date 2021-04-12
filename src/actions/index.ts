import { Message, SetMessagesAction, UpdateRateAction, SET_MESSAGES, UPDATE_RATE } from '../types';

export const setMessagesAction = (messages: Message[]): SetMessagesAction => ({
    type: SET_MESSAGES,
    payload: messages,
});

export const updateRateAction = (rate: string): UpdateRateAction => ({
    type: UPDATE_RATE,
    payload: rate,
});
