import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-title container">
                <h3>My name is Eddy Ma, a developer in Brisbane</h3>
                <p className="about-me-description">
                    I love programming
                </p>
            </div>
        );
    }
}

export default AboutMe;
