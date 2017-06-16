import React, { Component } from 'react';
import './Footer.css';

class GitHubRepo extends Component {
    render() {
        console.log(this.props);
        return (
            
                <li><a href={this.props.html_url}>{this.props.name}</a></li>
           
        );
    }
}

export default GitHubRepo;
