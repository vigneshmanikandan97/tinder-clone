import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// STYLESHEET IMPORTS
import './Header.css';

// MATERIAL UI IMPORTS
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from '@material-ui/icons/Chat';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// ASSET IMPORTS
import TinderLogo from "./../../assets/images/tinder-logo.svg";

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
        { backButton
            ? (<IconButton onClick={() => history.replace(backButton)}><ArrowBackIosIcon fontSize="large" className="header__icon"/></IconButton>)
            : (<IconButton><PersonIcon fontSize="large" className="header__icon"/></IconButton>)
        }
            <Link to="/">
                <img className="header__logo" src={TinderLogo} alt="tinder-logo"/>
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ChatIcon fontSize="large" className="header__chat" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header