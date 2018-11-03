import React, { Component } from 'react';
import { auth, provider } from 'shared/Firebase';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
    render() {
        return(
            <div class="container" id="CONTENTS">
                <h4>Sign Up</h4>
                <div class="row card-panel">
                    <SignUpForm />
                </div>
            </div>
        );
    }
}

export default SignUp;