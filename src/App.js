import './App.css';
import Header from './components/Header/Header';
import Card from './components/Cards/Card';
import SwipeButton from './components/SwipeButtons/SwipeButton';
import Chats from './components/Chats/Chats';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
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
            <Card />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
