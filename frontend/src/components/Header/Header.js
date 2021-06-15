import React from 'react';

// STYLESHEET IMPORTS
import './Header.css';

// MATERIAL UI IMPORTS
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from '@material-ui/icons/Chat';

// ASSET IMPORTS
import TinderLogo from "./../../assets/images/tinder-logo.svg";

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img className="header__logo" src={TinderLogo} alt="tinder-logo"/>

            <IconButton>
                <ChatIcon fontSize="large" className="header__chat" />
                </IconButton>
        </div>
    )
}

export default Header