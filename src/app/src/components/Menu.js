import React, { Component } from 'react';
import '../pages/AboutMe.css';
import fb from '../modules/FirebaseHelper';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.menu = [
            <li key="1"><Link to='/project'>Projects</Link></li>,
            <li key="2"><Link to='/blog'>Blogs</Link></li>,
            <li key="3"><Link to='/aboutme'>About Me</Link></li>,
            <li key="4"><Link to='/contactme'>Contact Me</Link></li>,
        ]

    }

    componentDidMount() {
        var self = this;
        var menuRef = fb.getRecords("/menu/mainmenu");
        menuRef.on('value', function (snapshot) {
            var menuItems = (snapshot.val().items);
            var list = menuItems.map((item) => {
                return <li key={item.id}><Link to={`${item.path}`}>{item.text}</Link></li>

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
                        <Link className="navbar-brand" to="/home" >Eddy Ma</Link> 
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {this.menu}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Menu;
