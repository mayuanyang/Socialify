import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Blog from './pages/Blog';
import Project from './pages/Project';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className="App">
              <Menu />
              <div className="content row">
                <Route exact path="/home" component={Home} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/blog/:blogid?" component={Blog} />
                <Route exact path="/contactme" component={ContactMe} />
              </div>
              <Footer />
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
