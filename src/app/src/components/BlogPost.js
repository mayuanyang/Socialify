import React, { Component } from 'react';
import Moment from 'moment';

class BlogPost extends Component {

    constructor(){
        super();
        this.state = {expanded: false};
    }

    onTitleClicked(){
        this.setState((prevState, props) => {
            return {expanded: !prevState.expanded};
        });
    }
    
    render() {
        console.log(this.props);
        Moment.locale('en-au');
        return (
            <div className="blog-post">
                <div key={this.props.link} className="post">
						<h2 className="blog-title"><a href={this.props.link}
						dangerouslySetInnerHTML={{__html:this.props.title.rendered}}
						/></h2>
                        <span className="date">Published on: {Moment(this.props.date).format('LLL')}</span>
						{this.props.excerpt.rendered ?
							<div className="blog-content" dangerouslySetInnerHTML={{__html:this.props.excerpt.rendered}} />
						: null}
						
					</div>            
            </div>
            
        );
    }
}

export default BlogPost;
