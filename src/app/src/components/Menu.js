import React, { Component } from 'react';
import './AboutMe.css';
import fb from '../modules/FirebaseHelper';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        }
        var self = this;
        var menuRef = fb.getRecords("/menu/mainmenu");
        menuRef.on('value', function (snapshot) {
            var menuItems = (snapshot.val().items);
            var list = menuItems.map((item) => {
                    return <li key={item.id}><a href="#">{item.text}</a></li>
                });
            
            self.setState({
                menu: list
            });
        });
    }


    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#" onClick={this.sendRecordToFirebase}>Eddy Ma</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {this.state.menu}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Right 1</a></li>
                            <li><a href="#">Right 2</a></li>
                            <li><a href="#">Right 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Menu;
