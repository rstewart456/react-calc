import React, { Component } from "react";
import "./App.css";
import { Button } from "./Button";
import { Display } from "./Display";
import { evaluate } from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      toggledecimal: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  operation = val => {
    this.setState({ toggledecimal: "" });
    return this.state.input.length <= 0
      ? null
      : this.state.input.substr(-1) === "*"
      ? null
      : this.state.input.substr(-1) === "/"
      ? null
      : this.state.input.substr(-1) === "+"
      ? null
      : this.state.input.substr(-1) === "-"
      ? null
      : this.setState({ input: this.state.input + val });
  };

  inputdecimal = () => {
    this.setState({ toggledecimal: this.state.toggledecimal + "OFF" });
    return this.state.toggledecimal.includes("OFF")
      ? null
      : this.setState({ input: this.state.input + "." });
  };

  handleEqual = () => {
    return this.state.input.length <= 0
      ? null
      : this.state.input.substr(-1) === "*"
      ? null
      : this.state.input.substr(-1) === "/"
      ? null
      : this.state.input.substr(-1) === "+"
      ? null
      : this.state.input.substr(-1) === "-"
      ? null
      : this.state.input.length === "1"
      ? null
      : this.state.input.substr(-1) === "."
      ? null
      : this.setState({ input: String(evaluate(this.state.input)) });
  };

  dot = () => {
    return this.state.input.includes(".")
      ? this.setState({ toggledecimal: "OFF" })
      : null;
  };

  clear = () => {
    this.setState({
      input: ""
    });
    this.setState({ toggledecimal: "" });
  };

  backspace = () => {
    this.setState({
      input: this.state.input.slice(0, -1)
    });
    return this.state.input.substr(-1) === "."
      ? this.setState({ toggledecimal: "" })
      : null;
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
            <Display input = {this.state.input} />
          <div className="row">
            <Button name="All Clear" handleClick={() => this.clear()} />
            <Button name="Back Space" handleClick={() => this.backspace()} />
          </div>
          <div className="row">
            <Button name="7" handleClick={this.addToInput} />
            <Button name="8" handleClick={this.addToInput} />
            <Button name="9" handleClick={this.addToInput} />
            <Button name="/" handleClick={this.operation} />
          </div>
          <div className="row">
            <Button name="4" handleClick={this.addToInput} />
            <Button name="5" handleClick={this.addToInput} />
            <Button name="6" handleClick={this.addToInput} />
            <Button name="*" handleClick={this.operation} />
          </div>
          <div className="row">
            <Button name="1" handleClick={this.addToInput} />
            <Button name="2" handleClick={this.addToInput} />
            <Button name="3" handleClick={this.addToInput} />
            <Button name="+" handleClick={this.operation} />
          </div>
          <div className="row">
            <Button name="0" handleClick={this.addToInput} />
            <Button name="." handleClick={this.inputdecimal} />
            <Button
              name="="
              handleClick={() => {
                this.handleEqual();
                this.dot();
              }}
            />
            <Button name="-" handleClick={this.operation} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
