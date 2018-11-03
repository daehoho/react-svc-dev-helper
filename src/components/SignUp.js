import React, { Component } from 'react';
import { auth, provider } from 'shared/Firebase';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
    state = {
        email : '',
        password : ''
    }

    handleSignUp = (data) => {
        this.setState({
            email : data.email,
            password : data.password
        })
    }

    render() {
        // return(
        //     <SignUpForm onCreate={this.handleSignUp}/>
        // );
    }
}

export default SignUp;