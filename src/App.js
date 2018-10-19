import React, { Component } from 'react';
import './App.css';
import Fs from './Fs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {number: null, sequence: null};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(state => {
        var result;
        result = Fs(state.number);

        return {sequence: result};
    });

    return false;
  }

  // toggle the input field value
  handleChange(e) {
    if (isNaN(e.target.value)) {
      this.setState({ sequence: 'Wrong input, please enter a number' });
    }
    this.setState({ number: e.target.value });
  }

  render() {
    return (
        <div className="fs">
          <label>
            <br/>
            Enter a number:
            <input type="text" id="number"
              onChange={this.handleChange}
              name="Number" />
          </label>
          <button onClick={this.handleClick}>Get Fibonacci Sequence</button>
          <br/>

          <p>Result: {this.state.sequence}</p>
        </div>
    );
  }
}

export default App;
