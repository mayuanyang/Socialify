import React, { Component } from 'react';


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
        console.log(this.state);
        return (
            <div className="blog-post">
                <div key={this.props.link} className="post">
                        <span className="date">{this.props.date}</span>
						<h2 className="blog-title"><a href={this.props.link}
						dangerouslySetInnerHTML={{__html:this.props.title.rendered}}
						/></h2>
						{this.props.excerpt.rendered ?
							<div className="blog-content" dangerouslySetInnerHTML={{__html:this.props.excerpt.rendered}} />
						: null}
						<a className="button read-more" href={this.props.link}>Read More &raquo;</a>
						
					</div>            
            </div>
            
        );
    }
}

export default BlogPost;
