import React, { Component } from 'react';
import { fire } from 'shared/Firebase';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Contents from 'components/Contents';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    fire();
  }
  render() {
    return (
      <div>
        <Header />
        <Contents />
        <Footer />
      </div>
    );
  }
}

export default App;