import axios from "axios";
import config from "../config";

export function fetchRepos() {
  return function(dispatch) {
    dispatch({type: "FETCH_GITHUB_REPOS"});
    
    axios.get(`${config.github_endpoint_base_path}/repos`)
      .then((response) => {
        dispatch({type: "GITHUB_REPOS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GITHUB_REPOS_FETCH_FAILED", payload: err})
      })
  }
}