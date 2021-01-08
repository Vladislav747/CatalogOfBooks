import firebase from 'firebase';
import React, { Component } from 'react';

class BookList extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
        };
        
    }
    componentDidMount() {
        this.getBook();
    }

    getBook = () => {
        const db = firebase.firestore();
        return db.collection("bookList")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
               
            })
       
        });
       
        // this.setState({
        //     name: bookData.name
        // })
    }

    render() {
        return (
            <ul>
                
                {this.getBook}
                Хочу здесь получить список книг
                {this.state.name}
            </ul>
        )
    }
}

export default BookList;
