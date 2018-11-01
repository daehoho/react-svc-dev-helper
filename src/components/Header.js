import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <nav class="indigo">
                <div class="nav-wrapper container">
                    <a href="/" class="brand-logo">Service Developemnt Helper</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="hosting.html"><i class="material-icons">language</i></a></li>
                        <li><a href="auth.html"><i class="material-icons">supervisor_account</i></a></li>
                        <li><a class="dropdown-button" data-activates="dropdown1"><i class="material-icons">more_vert</i></a></li>
                    </ul>
                    <ul id="dropdown1" class="dropdown-content">
                        <li><a class="black-text"><strong>더 보기</strong></a></li>
                        <li class="divider"></li>
                        <li><a href="https://portal.daou.co.kr" target="_blank" class="indigo-text">portal</a></li>
                    </ul>
                    <ul id="nav-mobile" class="side-nav">
                        <li><a href="hosting.html">Hosting</a></li>
                        <li><a href="auth.html">Auth</a></li>
                        <li class="divider"></li>
                        <li><a href="https://portal.daou.co.kr" target="_blank">portal</a></li>
                    </ul>
                    <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
                </div>
            </nav>
        );
    }
}

export default Header;
