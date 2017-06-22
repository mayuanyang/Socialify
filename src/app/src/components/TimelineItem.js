import React, { Component } from 'react';
import TimelineLogo from './TimelineLogo';
import Moment from 'moment';

class TimelineItem extends Component {
    
    render() {
         Moment.locale('en-au')
        const formattedDT = Moment(this.props.item.date).format('LL')
        return (
            <li className={this.props.item.inverted ? 'timeline-inverted': 'timeline'}>
                            
                                <TimelineLogo type={this.props.item.type} />
                        
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="timeline-title">
                                        <a href={this.props.item.link} dangerouslySetInnerHTML={{__html:this.props.item.title}} />
                                    </h4>
                                    <p className="text-muted">
                                            <i className="fa fa-clock-o">
                                                {formattedDT}
                                            </i>
                                    </p>
                                </div>
                                <div className="timeline-body">
                                    <p>{this.props.item.description}</p>
                                </div>
                            </div>
                            
                        </li>
        );
    }
}

export default TimelineItem;
