import React, { Component } from 'react';
import './Header.css';
//import fb from '../modules/FirebaseHelper';

class Header extends Component {
    
    render() {
        return (
            <div className="row App-header">
                <div key='project' className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">Recent Projects</div>
                        <div className="panel-body"></div>
                    </div>
                </div>
                <div key='blog' className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">Recent Blogs</div>
                        <div className="panel-body"></div>
                    </div>
                </div>
                <div key='tweet' className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">Recent Tweets</div>
                        <div className="panel-body"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
