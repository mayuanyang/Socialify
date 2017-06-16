import React, { Component } from 'react';
import { connect } from "react-redux";
import './Project.css';
import {fetchRepos} from '../actions/githubActions';
import GitHubRepo from '../components/GitHubRepo';


class Project extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchRepos())
    }
    render() {
        console.log(this.props.repos);
        return (
            <div className="about-me-title container">
                <h3>Projects that i am currently working on</h3>
                <ul>
                    {this.props.repos.map(repo => (
                        <GitHubRepo key={repo.html_url} {...repo} />
                    ))}
                </ul>
            </div>
        );
    }
}

Project = connect((store) => {
  return {
    repos: store.github.repos,
    reposFetched: store.github.fetched,
  };
})(Project);

export default Project;
