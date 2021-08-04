import './ChatTemplate.css';

import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

function ChatTemplate({ name, message, pfp, timestamp }) {
    return (
        <Button className="chat">
            <Avatar className="chat__image" alt={name} src={pfp}></Avatar>
            <div className="chat__mainContainer">
                <div className="chat__primaryContainer">
                    <h3 className="chat__primaryContainer__name">{name}</h3>
                    <div className="chat__secondaryContainer">
                        <p className="chat__secondaryContainer__message">{message}</p>
                        <span className="chat__secondaryContainer__timestamp">{timestamp}</span>
                    </div>
                </div>
            </div>
        </Button>
    )
}

export default ChatTemplate;
