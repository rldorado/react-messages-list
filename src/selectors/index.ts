import { createSelector } from 'reselect';

import { Message, State } from '../types';

export const messagesSelector = createSelector(
    (state: State): Message[] => state.messages,
    (messages) => messages,
);

export const rateSelector = createSelector(
    (state: State): string => state.rate,
    (rate) => rate,
);
