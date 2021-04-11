import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMessagesAction } from '../actions';
import { messagesSelector } from '../selectors';
import { getMessagesList } from './../fakeApi';
import { ListItem } from './ListItem';

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
        <div className="container-fluid">
            {messages.map((message) => (
                <ListItem key={message.id} message={message} />
            ))}
        </div>
    );
};
