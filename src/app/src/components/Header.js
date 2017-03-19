import React, { Component } from 'react';
import './Header.css';
import fb from '../modules/FirebaseHelper';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
        var self = this;
        var newsRef = fb.getRecords("/news/");
        newsRef.on('value', function (snapshot) {
            var newsItems = (snapshot.val().items);
            var list = newsItems.map((item) => {
                return <div key={item.id} className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">Panel heading without title</div>
                        <div className="panel-body">{item.text}</div>
                    </div>
                </div>
            });

            self.setState({
                news: list
            });
        });
    }

    render() {
        return (
            <div className="row App-header">
                {this.state.news}
            </div>
        );
    }
}

export default Header;
