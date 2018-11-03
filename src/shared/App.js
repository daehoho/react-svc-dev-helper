import React, { Component } from 'react';
import { fire } from 'shared/Firebase';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Main, TeamComm, NotFound } from 'pages';
import 'App.css';

class App extends Component {
  constructor(props) {
    super(props);
    fire();
  }
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/teamComm" component={TeamComm}/>
            <Route component={NotFound}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;