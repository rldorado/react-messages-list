import React from 'react';

import { Message } from './../types';

type ListItemProps = {
    message: Message;
};

export const ListItem = ({ message }: ListItemProps) => {
    const { text, btcAmount, messageContent } = message;

    return (
        <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title">{text}</h5>
                {Array.isArray(messageContent) ? (
                    <div>
                        {messageContent.map(({ source, amount }, index) => (
                            <p key={index} className="card-text">
                                {source}: {amount}{' '}
                                <small className="text-muted">{btcAmount} USD</small>
                            </p>
                        ))}
                    </div>
                ) : (
                    <div>{messageContent}</div>
                )}
            </div>
        </div>
    );
};
