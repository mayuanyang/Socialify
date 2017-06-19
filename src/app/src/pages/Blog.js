import './Blog.css'; 
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../actions/wordpressActions';
import BlogPost from '../components/BlogPost';


class Blog extends Component {
    componentWillMount() {
        this.props.dispatch(fetchPosts())
    }

    render() {
        return (
            <ul id="blogs" className="container">
                {this.props.posts.map(post => (
                        <BlogPost key={post.id} {...post}  />
                    ))}
            </ul>
        );
    }
}

Blog = connect((store) => {
  return {
    posts: store.wordpress.posts,
    postsFetched: store.wordpress.fetched,
  };
})(Blog);

export default Blog;
