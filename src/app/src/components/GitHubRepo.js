import React, { Component } from 'react';
import './Footer.css';

class GitHubRepo extends Component {
    
    render() {
        console.log(this.props);
        return (
                <li  key={this.props.html_url}>
                    <a href={this.props.html_url}>{this.props.name}</a><button onClick={() => this.props.onButtonClick()} >Click Me</button>
                </li>
        );
    }

    onButtonClick(){
        console.log(this.props);
        this.props.onButtonClick();

    }
}

export default GitHubRepo;
