import React, { Component } from 'react';
import firebase, { auth, provider } from 'shared/Firebase';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Authentication from './components/Authentication';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { Route, Switch } from 'react-router-dom';
import { Main, TeamComm, NotFound } from 'pages';
import 'App.css';

class App extends Component {
  state = {
    user : null
  }

  handleLogin = (data) => {
    const { user } = this.state;
    this.setState({
      user: data
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Authentication onAuth={this.handleLogin}/>
        <SignIn onAuth={this.handleLogin}/>
        <SignUp />
        
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