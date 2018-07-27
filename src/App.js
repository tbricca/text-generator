import React, { Component } from "react";
import "./App.css";
import Output from "./Components/Output";
import Select from "./Components/Controls/Select";
import Text from "./Components/Controls/Text";
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

  showHtml(x) {
    this.setState({ html: x }, this.getSampleText);
  }

  changeParas(number) {
    this.setState({ paras: number }, this.getSampleText);
  }

  render() {
    return (
      <div className="App Container">
        <h1>ReactJS Sample Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Paragraphs:</label>
            <Text
              value={this.state.paras}
              onChange={this.changeParas.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Include HTML:</label>
            <Select
              value={this.state.html}
              onChange={this.showHtml.bind(this)}
            />
          </div>
        </form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
