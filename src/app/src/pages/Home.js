import React, { Component } from 'react';
import TimelineItem from '../components/TimelineItem'
import './Home.css';

class Home extends Component {
    
    render() {
        let dummyTimelines = [{
            key: 1,
            inverted: false,
            title: 'Title 1',
            description: 'Description 1',
            type: 'twitter'
        },
        {
            key: 2,
            inverted: true,
            title: 'Title 2',
            description: 'Description 2',
            type: 'twitter'
        },
        {
            key: 3,
            inverted: false,
            title: 'Title 3',
            description: 'Description 3',
            type: 'wordpress'
        }];
        return (
            <div className="home container">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">My Timeline</h4>
                </div>
                <div className="modal-body">
                    <p></p>
                    <ul className="timeline">
                        {dummyTimelines.map(timeline => (
                            <TimelineItem key={timeline.key} item={timeline}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;
