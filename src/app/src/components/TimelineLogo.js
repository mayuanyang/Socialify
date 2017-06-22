import React, { Component } from 'react';

class TimelineLogo extends Component {
    
    render() {
        switch(this.props.type){
            case 'github': {
                return <div className="timeline-badge github"><i className="fa fa-github"></i></div>
            }
            case 'twitter': {
                return <div className="timeline-badge twitter"><i className="fa fa-twitter"></i></div>
            }
            case 'wordpress': {
                return <div className="timeline-badge wordpress"><i className="fa fa-wordpress"></i></div>
            }
            default: {
                return <div className="timeline-badge twitter"><i className="fa fa-check"></i></div>
            }
            
        }
        
    }
}

export default TimelineLogo;
