import React, { Component } from 'react';

class Counter extends Component {
  // Initialize state with count set to 0
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        {/* Display count in the required format */}
        <p>Count: {this.state.count}</p>

        {/* Buttons for increment and decrement */}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
