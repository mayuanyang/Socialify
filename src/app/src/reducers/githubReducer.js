export default function reducer(state={
    repos: [],
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
      default :{
        return state;
      }
    }
}