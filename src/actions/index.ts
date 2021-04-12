import {
    Message,
    SetMessagesAction,
    UpdateRateAction,
    DeleteMessageAction,
    AddServiceMessageAction,
    SET_MESSAGES,
    UPDATE_RATE,
    DELETE_MESSAGE,
    ADD_SERVICE_MESSAGE,
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

export const addServiceMessageAction = (id: number | string): AddServiceMessageAction => ({
    type: ADD_SERVICE_MESSAGE,
    payload: id,
});
