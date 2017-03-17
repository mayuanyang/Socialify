import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-mailchimp">
                    <div className="container text-center">

                        <h2></h2>
                        <h5></h5>

                    </div>
                </div>
                <div className="footer-social">
                    <div className="container text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item social-github">
                                <a href="https://github.com/mayuanyang"><i className="fa fa-github"></i></a>
                            </li>
                            <li className="list-inline-item social-twitter">
                                <a href="https://twitter.com/nmolecule"><i className="fa fa-twitter"></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="container">

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
