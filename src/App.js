import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Registration from "./Components/Registration";
import firebase from "firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: null,
      db: null
    };
  }
  componentDidMount() {
    //Initialize Firebase
    var config = {
      apiKey: "AIzaSyCuSej-5sos-Ci7gCF5F8mY71gd0vzh84U",
      authDomain: "connected-nursing-home.firebaseapp.com",
      databaseURL: "https://connected-nursing-home.firebaseio.com",
      projectId: "connected-nursing-home",
      storageBucket: "connected-nursing-home.appspot.com",
      messagingSenderId: "669820416245"
    };
    firebase.initializeApp(config);
    this.setState({ auth: firebase.auth(), db: firebase.firestore() });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Registration auth={this.state.auth} db={this.state.db} />
          <Route path="/" component={Registration} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
