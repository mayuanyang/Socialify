import React, { Component } from 'react';


class BlogPost extends Component {
    
    render() {
        return (
            <div>
                <header className="header">
                    <div className="content-wrap">
                        <h3 dangerouslySetInnerHTML={{__html: this.props.title.rendered}}></h3>
                    </div>
                </header>
                <div id="content">
                    <div className="content-wrap">
                        <article className="article">
                            <section className="content" dangerouslySetInnerHTML={{__html: this.props.content.rendered}} />
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPost;
