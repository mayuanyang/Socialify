import React, { Component } from 'react';
import TimelineItem from '../components/TimelineItem'
import './Home.css';
import {fetchRepos} from '../actions/githubActions';
import * as wordpress from '../actions/wordpressActions';
import { connect } from "react-redux";

class Home extends Component {
    componentWillMount() {
        this.props.dispatch(wordpress.fetchPosts());
        this.props.dispatch(fetchRepos());
    }

    compare(a,b) {
        if (a.date < b.date)
            return -1;
        if (a.date > b.date)
            return 1;
        return 0;
    }

    render() {
        let allItems = [];
        this.props.repos.map(repo => {
            const isInverted = new Date(repo.created_at).getDay() % 2 === 0;
            allItems.push(
                {
                    key: repo.html_url, 
                    title: repo.name, 
                    description: repo.description, 
                    type: "github",
                    date: new Date(repo.created_at),
                    inverted: isInverted,
                    link: ''
                });
                // Just to make ESLint happy
                return null;
        });
        this.props.blogs.map(blog => {
            const isInverted = new Date(blog.date).getDay() % 2 === 0;
            allItems.push({
                key: blog.link, 
                title: blog.title.rendered, 
                description: 'A blog post is posted', 
                type: "wordpress",
                date: new Date(blog.date),
                inverted: isInverted,
                link: blog.link
            });
            return null;
        });

        allItems = allItems.sort(this.compare).reverse();
        
        return (
            <div className="home container">
                
                    <div className="modal-header">
                        <h4 className="modal-title">My Timeline</h4>
                    </div>
                    <div className="modal-body">
                        <p></p>
                        <ul className="timeline">
                            {allItems.map(timeline => (
                                <TimelineItem key={timeline.key} item={timeline}/>
                            ))}
                        </ul>
                    </div>
            </div>
        );
    }
}

Home = connect((store) => {
  return {
    repos: store.github.repos,
    reposFetched: store.github.fetched,
    blogs: store.wordpress.posts
  };
})(Home);

export default Home;
