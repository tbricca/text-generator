import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ""
    };
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    // here is the REQUEST to the api (GET request) and our specific parameters
    axios
      .get(
        "http://hipsterjesus.com/api?paras=" +
          this.state.paras +
          "&html=" +
          this.state.html
      )
      // this is the response from the API being like 'Boom, here's what your ordered good sir'
      //this returns a promise so we will need to use .then after this call
      .then(response => {
        // Here it's like thank you for bringing out my order I'm about to use this in a proper way' // AKA SETTING THE STATE
        this.setState({ text: response.data.text }, function() {
          console.log(this.state);
        });
      })
      // if get response has an error we want to catch it
      .catch(err => {
        console.log(err, "what is up");
      });
  }

  render() {
    return <div className="App">Hello</div>;
  }
}

export default App;
