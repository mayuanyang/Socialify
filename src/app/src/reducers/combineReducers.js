import { combineReducers } from "redux";

import tweets from "./tweetReducer";
import github from "./githubReducer";

export default combineReducers({
  tweets,
  github
})