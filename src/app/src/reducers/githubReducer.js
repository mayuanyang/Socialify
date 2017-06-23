export default function reducer(state={
    repos: [],
    starredRepos: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_GITHUB_REPOS": {
        return {...state, fetching: true};
      }
      case "GITHUB_REPOS_FETCH_FAILED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "GITHUB_REPOS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          repos: action.payload,
        };
      }
      case "FETCH_GITHUB_STARRED": {
        return {...state, fetching: true};
      }
      case "GITHUB_STARRED_FETCH_FAILED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "GITHUB_STARRED_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          starredRepos: action.payload,
        };
      }
      default :{
        return state;
      }
    }
}