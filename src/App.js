import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Cards/Card';
import SwipeButton from './components/SwipeButtons/SwipeButton';
import Chats from './components/Chats/Chats';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  if ('ontouchstart' in document.documentElement) {
    console.log("touchstart present");
    document.addEventListener('touchstart', {passive: true});
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <React.StrictMode><Card /></React.StrictMode>
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
