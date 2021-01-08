import React from 'react';
import firesbase from "./../Firestore";
import firebase from 'firebase';

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: ''
        };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection('users').add({
            login: this.state.login,
            password: this.state.password
        });  
        this.setState({
            login: '',
            password: ''
        });
    };

    createAccount = () => {
        const {login, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(login, password)
        .catch( error => console.log('error'));

        // firebase.auth().signInWithEmailAndPassword(login, password)
        // .catch()
    }
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then((user) => {
    //     const user = firebase.auth().currentUser;
    //     logUser(user); // Optional
    // })
    // .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ..
    // });

    // function logUser(user) {
    //     const ref = firebase.database().ref("users");
    //     const obj = {
    //         "user": user,
    //     };
    //     ref.push(obj); // or however you wish to update the node
    // }

    render() {
      return (
          <form onSubmit={this.addUser}>
            <input
              type="text"
              name="login"
              placeholder="Enter your login"
              onChange={this.updateInput}
              value={this.state.login}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={this.updateInput}
              value={this.state.password}
            />
            <button type="submit">Submit</button>
          </form>
          );
        }
     }
  export default User;