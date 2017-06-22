import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import config from '../config';

class Twitter extends React.Component {
   render() {
        return (
            <div id="twitter-page" className="container">
            <div className="col-lg-8">
             <Timeline
                dataSource={{
                sourceType: 'profile',
                screenName: config.twitter_username
                }}
                options={{
                username: config.twitter_username,
                }}
                />
            </div>
            </div>
        );
    }
}

export default Twitter;


