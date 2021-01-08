import firebase from "firebase";
import React, { Component } from "react";

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      books: [],
    };
  }
  componentDidMount() {
    this.getBook();
  }

  getBook = () => {
    const db = firebase.firestore();
    return db
      .collection("bookList")
      .get()
      .then((querySnapshot) => {
        //arrState - массив для вставки в state
        let arrState = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          arrState.push(doc.data());
        });
        return arrState;
      })
      .then((arr) =>
        this.setState({
          books: arr,
        })
      );
  };

  render() {
    return (
      <ul>
        Хочу здесь получить список книг и в итоге получила
        {this.state.books.map((el) => (
          <li>
            <div>{el.name}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default BookList;
