import axios from "axios";

export function fetchPosts() {
  return function(dispatch) {
    dispatch({type: "FETCH_WORDPRESS_POSTS"});
    
    axios.get("https://public-api.wordpress.com/wp/v2/sites/eddyma.wordpress.com/posts")
      .then((response) => {
        dispatch({type: "WORDPRESS_POSTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "WORDPRESS_POSTS_FETCH_FAILED", payload: err})
      })
  }
}