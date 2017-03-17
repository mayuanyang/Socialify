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
                    return <li key={item.id}><a href="#">{item.text}</a></li>
                });
            
            self.setState({
                news: list
            });
        });
    }

    render() {
        return (
            <div className="App-header">
<ul className="nav navbar-nav">
                            {this.state.news}
                        </ul>
            </div>
        );
    }
}

export default Header;
