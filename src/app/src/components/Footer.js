import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-mailchimp">
                    <div className="container text-center">


                        <h2>Want more Bootstrap themes &amp; templates?</h2>
                        <h5>Subscribe to our mailing list to receive an update when new items arrive!</h5>

                    </div>
                </div>
                <div className="footer-social">
                    <div className="container text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item social-github">
                                <a href="https://github.com/blackrockdigital"><i className="fa fa-github"></i></a>
                            </li>
                            <li className="list-inline-item social-twitter">
                                <a href="https://twitter.com/sbootstrap"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li className="list-inline-item social-facebook">
                                <a href="https://www.facebook.com/StartBootstrap/"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li className="list-inline-item social-google-plus">
                                <a href="https://plus.google.com/+Startbootstrap"><i className="fa fa-google-plus"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="container">
                        <a href="/">Start Bootstrap</a> is a project created and maintained by <a href="http://davidmiller.io">David Miller</a> at <a href="http://blackrockdigital.io">Blackrock Digital</a>.

</div>
                </div>
            </footer>
        );
    }
}

export default Footer;
