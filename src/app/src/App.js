import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Menu from './components/Menu';
//import { Navbar, Jumbotron, Button, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="App-header">
          
        </div>
        <div className="content row">
        <AboutMe />
          I will update this page every so often
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
