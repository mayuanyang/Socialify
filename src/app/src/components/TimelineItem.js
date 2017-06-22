import React, { Component } from 'react';

class TimelineItem extends Component {
    
    render() {
        console.log(this.props.item);
        return (
            <li className={this.props.item.inverted ? 'timeline-inverted': 'timeline'}>
                            <div className="{'timeline-badge': true, 'warning': msg.from == model.botName, 'success':msg.from != model.botName}">
                                <i className="fa fa-check">
                                    {this.props.item.type}
                                </i>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="timeline-title">{this.props.item.title}</h4>
                                    <p>
                                        <small className="text-muted"><i className="fa fa-clock-o">{this.props.item.description}</i></small>
                                    </p>
                                </div>
                                <div className="timeline-body">
                                    <p>Hello world</p>
                                </div>
                            </div>
                            
                        </li>
        );
    }
}

export default TimelineItem;
