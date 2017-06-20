import axios from "axios";
import config from "../config";

export function fetchPosts() {
  return function(dispatch) {
    dispatch({type: "FETCH_WORDPRESS_POSTS"});
    axios.get(`${config.wordpress_endpoint_base_path}/posts`)
      .then((response) => {
        dispatch({type: "WORDPRESS_POSTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "WORDPRESS_POSTS_FETCH_FAILED", payload: err})
      })
  }
}

export function fetchPostComments(blogId) {
  return function(dispatch) {
    dispatch({type: "FETCH_POST_COMMENTS"});
    axios.get(`${config.wordpress_endpoint_base_path}/comments?post=${blogId}`)
      .then((response) => {
        dispatch({type: "WORDPRESS_POST_COMMENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "WORDPRESS_POST__COMMENT_FETCH_FAILED", payload: err})
      })
  }
}