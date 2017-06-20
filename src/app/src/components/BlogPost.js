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
                <header className="header">
                    <div className="content-wrap">
                    <span className="date">{this.props.date}</span>
                        <a onClick={this.onTitleClicked.bind(this)} ><h3 dangerouslySetInnerHTML={{__html: this.props.title.rendered}}></h3></a>
                    </div>
                </header>
                {this.state.expanded ? 
                            
                            <div className="content-iframe">
                            <iframe src={this.props.link} name="targetframe" allowTransparency="true" frameBorder="0" className="row" ></iframe>
                        </div>
                        :
                        <div></div>
                    }
                        
                    </div>
            
        );
    }
}

export default BlogPost;
