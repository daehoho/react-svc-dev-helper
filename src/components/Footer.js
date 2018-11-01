import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="page-footer indigo" >
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Service Development Helper</h5>
                            <p class="grey-text text-lighten-4">Test Test</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Good Links</h5>
                            <ul>
                                <li><a class="white-text" target="_blank" href="https://portal.daou.co.kr">Daou Portal</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        &copy; 2018 Copyright DGC with Service Development (Daou Tech) <a class="white-text right" href="http://materializecss.com/" target="_blank">design by Materializecss</a>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;