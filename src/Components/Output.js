import React, { Component } from "react";

class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //whatever is passed into as a property is going to go into the stae value
      value: props.value
    };
  }

  render() {
    return <div className="output text-background">{this.props.value}</div>;
  }
}

export default Output;
