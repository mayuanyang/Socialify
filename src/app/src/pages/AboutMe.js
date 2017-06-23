import React, { Component } from 'react';
import './AboutMe.css';
import config from '../config';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-title container">
                <h3>{config.about_me_header}</h3>
                <p className="about-me-description">
                    {config.about_me_description}
                </p>
            </div>
        );
    }
}

export default AboutMe;
