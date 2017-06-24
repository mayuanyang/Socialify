import React, { Component } from 'react';
import './Footer.css';
import Moment from 'moment';

class GitHubRepo extends Component {
    
    render() {
        Moment.locale('en-au');
        const stargazersUrl = `${this.props.html_url}/stargazers`;
        return (
                
                <div className="project-item" key={this.props.html_url}>
                    <div className="row">
                        <div className="col-lg-8">
                            <a className="title" href={this.props.html_url}>{this.props.name}</a>
                        </div>
                        <div className="col-lg-2">
                            <p>{this.props.language}</p>
                        </div>
                        <div className="col-lg-2">
                            <a className="star" href={stargazersUrl}>
                                <i className="fa fa-star">&nbsp;{this.props.stargazers_count}</i>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="row">
                        <p className="updated-on">Updated on { Moment(this.props.updated_at).format('LL')}</p>
                    </div>
                </div>
        );
    }

    onButtonClick(){
        console.log(this.props);
        this.props.onButtonClick();

    }
}

export default GitHubRepo;
