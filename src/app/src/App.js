import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Menu from './components/Menu';
//import { Navbar, Jumbotron, Button, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <div className="content row">
          <AboutMe />
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
