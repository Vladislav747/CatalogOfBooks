import React from 'react';
import firesbase from "../Firestore";
import firebase from 'firebase';

class Book extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            year: '',
            ISBN: ''
        };
        
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    addBook = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection('bookList').add({
            name: this.state.name,
            author: this.state.author,
            year: this.state.year,
            ISBN: this.state.ISBN
        });  
        this.setState({
            name: '',
            author: '',
            year: '',
            ISBN: ''
        });
    };


    render() {
      return (
          <>
          <form onSubmit={this.addBook}>
            <input
              type="text"
              name="name"
              placeholder="Enter name of the book"
              onChange={this.updateInput}
              value={this.state.name}
            />
            <input
              type="text"
              name="author"
              placeholder="Enter author of the book"
              onChange={this.updateInput}
              value={this.state.author}
            />
            <input
              type="text"
              name="year"
              placeholder="Enter year of creating the book"
              onChange={this.updateInput}
              value={this.state.year}
            />
            <input
              type="text"
              name="ISBN"
              placeholder="Enter ISBN of the book"
              onChange={this.updateInput}
              value={this.state.ISBN}
            />
            <button type="submit">Submit</button>
          </form>
            <div>
                
                <div>                    
                      
                </div>                
            </div>
        </>
          );
        }
     }
  export default Book;