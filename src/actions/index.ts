import { Message, SetMessagesAction, SET_MESSAGES } from '../types';

export const setMessagesAction = (messages: Message[]): SetMessagesAction => ({
    type: SET_MESSAGES,
    payload: messages,
});
