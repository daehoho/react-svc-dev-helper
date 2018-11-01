import React, {Component} from 'react';

class Login extends Component {
    state = {
        loginState: '(인증되지 않음)'
    }
    render() {
        return(
            <div class = "card">
                <div class = "card-content">
                    Login State : 
                    <span id ="AUTH_STATE" class ="blue-text"></span>
                </div>
            </div>
        );
    }
}

export default Login;