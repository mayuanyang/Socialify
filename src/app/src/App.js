import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Menu />
            <Header />
            <div className="content row">
              <Route exact path="/aboutme" component={AboutMe} />
            </div>
            <Footer />
          </div>
      </Router>


    );
  }
}

export default App;
