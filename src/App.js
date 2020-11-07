import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import {BrowserRouter as Router} from 'react-router-dom'
import BeersDetails from './components/BeersDetails'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/beers/:id" component={BeersDetails}/>
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;