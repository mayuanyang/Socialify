export default function reducer(state={
    posts: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_WORDPRESS_POSTS": {
        return {...state, fetching: true};
      }
      case "WORDPRESS_POSTS_FETCH_FAILED": {
        return {...state, fetching: false, error: action.payload};
      }
      case "WORDPRESS_POSTS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          posts: action.payload,
        };
      }
      default :{
        return state;
      }
    }
}