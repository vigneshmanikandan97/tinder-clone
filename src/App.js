import './App.css';
import Header from './components/Header/Header';
import Card from './components/Cards/Card';
import SwipeButton from './components/SwipeButtons/SwipeButton';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>You've reached the chats page.</h1>
          </Route>
          <Route path="/">
            <Card />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
