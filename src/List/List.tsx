import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMessagesAction } from '../actions';
import { messagesSelector } from '../selectors';
import { getMessagesList } from './../fakeApi';

export const List = () => {
    const dispatch = useDispatch();
    const messages = useSelector(messagesSelector);

    useEffect(() => {
        const messagesSubscribed = getMessagesList().subscribe((messages) => {
            dispatch(setMessagesAction(messages));
        });
        return () => {
            messagesSubscribed.unsubscribe();
        };
    });

    return (
        <div>
            {messages.map((message) => (
                <li key={message.id}>{message.text}</li>
            ))}
        </div>
    );
};
