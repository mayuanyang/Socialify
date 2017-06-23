import React from 'react';
import { connect } from "react-redux";
import './Project.css';
import {fetchRepos} from '../actions/githubActions';
import GitHubRepo from '../components/GitHubRepo';


class Project extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchRepos());
    }

    onRepoItemClicked(e){
        // fetch the list again will not necessary update the DOM as they might be the same
        this.props.dispatch(fetchRepos());
    }

    render() {
        return (
            <div id="project-page" className="container">
                <ul>
                    {this.props.repos.map(repo => (
                        <GitHubRepo key={repo.id} {...repo} 
                        onButtonClick={this.onRepoItemClicked.bind(this)}  
                        />
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
