import React, { Component } from 'react'
import { auth } from 'shared/Firebase';

export default class signInForm extends Component {
    state = {
        mail : '',
        password :''
    }

    signIn = () => {
        auth.signInWithEmailAndPassword(this.state.mail, this.state.password).then(function(){

        }).catch(function(error) {
            alert(error.message);
        });
    }
 
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.signIn();
        this.setState({
            email:'',
            password:''
        })
    }

  render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="mail"
                    value={this.state.mail}
                    onChange = {this.handleChange}
                    name="mail"
                />
                <input
                    placeholder="password"
                    type="password"
                    value={this.state.password}
                    onChange = {this.handleChange}
                    name="password"
                />
                <button type="submit">SignIn</button>
            </form>
        );
  }
}
