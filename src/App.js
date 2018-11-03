import React, { Component } from 'react';
import firebase, { auth, provider } from 'shared/Firebase';
import Header from 'components/Header';
import Contents from 'components/Contents';
import Footer from 'components/Footer';
import Authentication from './components/Authentication';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import './App.css';

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
        <Contents />
        <Footer />
      </div>
    );
  }
}

export default App;