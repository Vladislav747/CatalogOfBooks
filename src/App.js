import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Book from './components/Book';
import User from './components/User';
import BookList from './components/BookList';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/user'component={User} />
          <Route path='/book' component={Book} />
          <Route path='/booklist'component={BookList} />
        </Switch>
        
        {/* <User />
        <Book />
        <BookList /> */}
      </div>
    </Router>
    
  );
}

export default App;
