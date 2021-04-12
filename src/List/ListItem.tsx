import React from 'react';
import { useSelector } from 'react-redux';

import { rateSelector } from '../selectors';
import { Message } from './../types';

type ListItemProps = {
    message: Message;
};

export const ListItem = ({ message }: ListItemProps) => {
    const { text, btcAmount, messageContent } = message;

    const rate: number = parseFloat(useSelector(rateSelector));

    return (
        <div className="card border-primary mb-2">
            <div className="card-body">
                <h5 className="card-title text-primary">{text}</h5>
                {Array.isArray(messageContent) ? (
                    <div>
                        {messageContent.map(({ source, amount }, index) => (
                            <p key={index} className="card-text">
                                {source + ': ' + amount + ' BTC '}
                                {btcAmount && (
                                    <span className="text-muted">
                                        {(btcAmount * rate).toFixed(5)} USD
                                    </span>
                                )}
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
