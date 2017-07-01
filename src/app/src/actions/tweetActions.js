import axios from "axios";
import config from "../config";

export function fetchTweets() {
  return function(dispatch) {
    dispatch({type: "FETCH_TWEETS"});
    
    /* 
      http://rest.learncode.academy is a public test server, so another user's experimentation can break your tests
      If you get console errors due to bad data:
      - change "reacttest" below to any other username
      - post some tweets to http://rest.learncode.academy/api/yourusername/tweets
    */
    axios.get("http://rest.learncode.academy/api/reacttest/tweets")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}

export function fetchListThroughApi() {
  dispatch({type: "FETCH_LIST_THROUGH_API"});
  /* API Doc here
    https://dev.twitter.com/rest/reference/get/collections/list
  */

  const AuthStr = `OAuth oauth_consumer_key="${config.twitter_api_consumer_key}",
oauth_nonce="RandomNumberIsOk", 
oauth_signature="", 
oauth_signature_method="HMAC-SHA1", 
oauth_timestamp="1318622958", 
oauth_token="${config.twitter_api_access_token}", 
oauth_version="1.0"
 `;
  
  axios.get("https://api.twitter.com/1.1/collections/list.json", { 'headers': { 'Authorization': AuthStr } })
        .then((response) => {
          dispatch({type: "FETCH_LIST_FULFILLED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCH_LIST_REJECTED", payload: err})
        })
}