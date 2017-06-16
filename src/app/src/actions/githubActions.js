import axios from "axios";

export function fetchRepos() {
  return function(dispatch) {
    dispatch({type: "FETCH_GITHUB_REPOS"});
    
    axios.get("https://api.github.com/users/mayuanyang/repos")
      .then((response) => {
        dispatch({type: "GITHUB_REPOS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GITHUB_REPOS_FETCH_FAILED", payload: err})
      })
  }
}