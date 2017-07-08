import axios from "axios";
import config from "../config";


export function fetchTweets() {
  dispatch({type: "FETCH_TWEETS"});
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
          dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
        })
}