import React, { Component } from 'react'
import { auth } from 'shared/Firebase';
import SignInForm from './SignInForm'

export default class SignIn extends Component {
    state = {
        user : null
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if(user) {
                this.props.onAuth(user);
                this.setState({ user });
            }
        });
    }
    render() {
        return (
            <div class="container" id="CONTENTS">
                <h4>Sign In</h4>
                <div class="row card-panel">
                    <SignInForm />
                </div>
            </div>
        )
    }
}
