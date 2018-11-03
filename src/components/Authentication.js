import React, { Component } from 'react';
import { auth, provider } from 'shared/Firebase';

class Authentication extends Component {
    state = {
        user: null
    }

    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                this.props.onAuth(result.user);
                this.setState({
                    user: result.user
                });
            })
    }

    logout = () => {
        auth.signOut()
            .then(() => {
                this.props.onAuth(null);
                this.setState({
                    user: null
                });
            });
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }

    render() {
        const { user } = this.state;
        console.log(user)
        return (
            <div class="card">
                <div class="card-content">
                    {this.state.user ?
                        <button id="BTN_GOOGLE_LOGIN" type="button" onClick={this.logout}>Google Log Out</button>
                        :
                        <button id="BTN_GOOGLE_LOGIN" type="button" onClick={this.login}>Google Log In</button>
                    }
                </div>
                {this.state.user ?
                    <div>
                        {this.state.user.displayName}
                    </div>
                    :
                    <div>
                    </div>
                }
            </div>
        );
    }
}

export default Authentication;