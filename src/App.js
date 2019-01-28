import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './components/home/home.page'
import Post from './components/posts/posts.page'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/posts">Post</Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Post} />
        </main>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
