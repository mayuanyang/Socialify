import axios from "axios";
import config from "../config";

export function fetchRepos() {
  return function(dispatch) {
    dispatch({type: "FETCH_GITHUB_REPOS"});
    
    axios.get(`${config.github_endpoint_base_path}/users/${config.github_username}/repos?sort=updated`)
      .then((response) => {
        dispatch({type: "GITHUB_REPOS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GITHUB_REPOS_FETCH_FAILED", payload: err})
      })
  }
}

export function fetchStarred() {
  return function(dispatch) {
    dispatch({type: "FETCH_GITHUB_STARRED"});
    
    axios.get(`${config.github_endpoint_base_path}/users/${config.github_username}/starred`, {'headers': {'Accept': 'application/vnd.github.v3.star+json'}})
      .then((response) => {
        dispatch({type: "GITHUB_STARRED_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GITHUB_STARRED_FETCH_FAILED", payload: err})
      })
  }
}