import React, { Component } from 'react';


class BlogPost extends Component {
    
    render() {
        return (
            <div className="blog-post">
                <header className="header">
                    <div className="content-wrap">
                    <span className="date">{this.props.date}</span>
                        <a href={this.props.link}><h3 dangerouslySetInnerHTML={{__html: this.props.title.rendered}}></h3></a>
                    </div>
                </header>
                <div id="content">
                    <div className="content-wrap">
                        <article className="article">
                            <section className="content" dangerouslySetInnerHTML={{__html: this.props.content.rendered}} />
                        </article>
                        <div>
                             {this.props.comments.filter(x => x.post === this.props.id).map(comment => (
                                <section key={comment.id} className="comment" dangerouslySetInnerHTML={{__html: comment.content.rendered}} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPost;
