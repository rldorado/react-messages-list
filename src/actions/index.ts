import {
    Message,
    SetMessagesAction,
    UpdateRateAction,
    DeleteMessageAction,
    SET_MESSAGES,
    UPDATE_RATE,
    DELETE_MESSAGE,
} from '../types';

export const setMessagesAction = (messages: Message[]): SetMessagesAction => ({
    type: SET_MESSAGES,
    payload: messages,
});

export const updateRateAction = (rate: string): UpdateRateAction => ({
    type: UPDATE_RATE,
    payload: rate,
});

export const deleteMessageAction = (id: number | string): DeleteMessageAction => ({
    type: DELETE_MESSAGE,
    payload: id,
});
