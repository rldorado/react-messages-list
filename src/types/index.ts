export const SET_MESSAGES = 'SET_MESSAGES';
export const UPDATE_RATE = 'UPDATE_RATE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

// Interfaces
export type Message = {
    id: number | string;
    text: string;
    canDelete: boolean;
    btcAmount: number;
    messageType: string;
    messageContent: string | { source: string; amount: number }[];
};

// State
export type State = {
    rate: string;
    messages: Message[];
};

// Actions
export type SetMessagesAction = {
    type: typeof SET_MESSAGES;
    payload: Message[];
};

export type UpdateRateAction = {
    type: typeof UPDATE_RATE;
    payload: string;
};

export type DeleteMessageAction = {
    type: typeof DELETE_MESSAGE;
    payload: number | string;
};
