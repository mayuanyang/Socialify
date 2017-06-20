export default function reducer(state={
    posts: [],
    comments: [],
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
      case "FETCH_POST_COMMENTS" :{
        return {...state, fetching: true};
      }
      case "WORDPRESS_POST_COMMENTS_FULFILLED" :{
        
         return {
           ...state, 
           fetching: false, 
           fetched: true,
           comments: action.payload
          };
      }
      case "WORDPRESS_POST__COMMENT_FETCH_FAILED" :{
         return {...state, fetching: false, error: action.payload};
      }
      default :{
        return state;
      }
    }
}