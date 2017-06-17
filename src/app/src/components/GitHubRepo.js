import React, { Component } from 'react';
import './Footer.css';

class GitHubRepo extends Component {
    
    render() {
        return (
                <li  key={this.props.html_url}>
                    <a href={this.props.html_url}>{this.props.name}</a>
                    <div>
                        <p>{this.props.description}</p>
                    </div>
                </li>
        );
    }

    onButtonClick(){
        console.log(this.props);
        this.props.onButtonClick();

    }
}

export default GitHubRepo;
