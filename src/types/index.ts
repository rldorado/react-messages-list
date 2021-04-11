export const SET_MESSAGES = 'SET_MESSAGES';

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
