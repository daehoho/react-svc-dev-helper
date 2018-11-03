import React, { Component } from 'react';
import { auth, provider } from 'shared/Firebase';

class SignUpForm extends Component {
    duplicated_msg = '';
    state = {
        name : '',
        team : '',
        email : '',
        password :'',
        password_check :''
    }
    
    signup = () => {
        const { name } = this.state;
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(function () {
            var user = auth.currentUser;
            user.updateProfile({
                'displayName' : name,
            }).then(function() {
                alert("success for signup");
                window.location.reload();
            }, function (error) {
                console.log(error);
                alert(error.message);
            });
        }).catch(function(error){
            console.log(error);
            alert(error.message);
        }) ;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }); 
    }

    handleConfirm = (e) => {
        this.handleChange(e);
        if(e.target.value != this.state.password) {
            this.confirm_msg = "패스워드가 서로 다릅니다."

        } else {
            this.confirm_msg = "확인되었습니다."
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.signup();
        // this.props.onCreate(this.state);
        this.setState({
            name:'',
            team:'',
            email:'',
            password:'',
            password_check:''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="name"
                    value={this.state.name}
                    onChange = {this.handleChange}
                    name="name"
                />
                <input 
                    placeholder="email"
                    type="email"
                    value={this.state.email}
                    onChange = {this.handleChange}
                    name="email"
                />
                <input 
                    placeholder="team"
                    value={this.state.team}
                    onChange = {this.handleChange}
                    name="team"
                />
                <input
                    placeholder="password"
                    type="password"
                    value={this.state.password}
                    onChange = {this.handleChange}
                    name="password"
                />
                <input
                    placeholder="confirm password"
                    type="password"
                    value={this.state.password_check}
                    onChange = {this.handleConfirm}
                    name="password_check"
                />
                <div>{this.confirm_msg}</div>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default SignUpForm;
