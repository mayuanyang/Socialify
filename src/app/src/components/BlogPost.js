import React, { Component } from 'react';


class BlogPost extends Component {
    
    render() {
        return (
            <li className="blog-post">
                <header className="header">
                    <div className="content-wrap">
                    <span className="date">{this.props.date}</span>
                        <a href={this.props.link}>
                            <p className="blog-title" dangerouslySetInnerHTML={{__html: this.props.title.rendered}}></p>
                        </a>
                    </div>
                </header>
            </li>
        );
    }
}

export default BlogPost;
