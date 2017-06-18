import { combineReducers } from "redux";

import tweets from "./tweetReducer";
import github from "./githubReducer";
import wordpress from "./wordpressReducer";

export default combineReducers({
  tweets,
  github,
  wordpress
})