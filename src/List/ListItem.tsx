import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addServiceMessageAction, deleteMessageAction } from '../actions';
import { rateSelector } from '../selectors';
import { Message } from './../types';

type ListItemProps = {
    message: Message;
};

export const ListItem = ({ message }: ListItemProps) => {
    const dispatch = useDispatch();
    const { id, text, canDelete, btcAmount, messageContent, isService } = message;

    const rate: number = parseFloat(useSelector(rateSelector));

    const handleDelete = useCallback(() => {
        dispatch(deleteMessageAction(id));
    }, [dispatch, id]);

    const handleAddServiceMessage = useCallback(() => {
        dispatch(addServiceMessageAction(id));
    }, [dispatch, id]);

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
                {canDelete && (
                    <button className="btn btn-danger" onClick={handleDelete}>
                        DELETE
                    </button>
                )}
                {!isService && (
                    <button className="btn btn-secondary" onClick={handleAddServiceMessage}>
                        Add service message
                    </button>
                )}
            </div>
        </div>
    );
};
