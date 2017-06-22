import './Blog.css'; 
import React, { Component } from 'react';
import { connect } from "react-redux";
import * as wordpress from '../actions/wordpressActions';
import BlogPost from '../components/BlogPost';


class Blog extends Component {
    componentWillMount() {
        this.props.dispatch(wordpress.fetchPosts());
    }

    onGetCommentsClicked(e){
        this.props.dispatch(wordpress.fetchPostComments(e));
    }

    render() {
        return (
            <div id="blogs" className="container">
                {this.props.posts.map(post => (
                        <BlogPost key={post.id} {...post}  
                        onCommentButtonClick={this.onGetCommentsClicked.bind(this)} 
                        comments={this.props.comments} />
                    ))}
            </div>
        );
    }
}

Blog = connect((store) => {
  return {
    posts: store.wordpress.posts,
    postsFetched: store.wordpress.fetched,
    comments: store.wordpress.comments
  };
})(Blog);

export default Blog;
