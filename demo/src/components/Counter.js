import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  }

  onButtonClicked = (e) => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    return (
      <div>
        {this.props.name}: 
        <button onClick={this.onButtonClicked}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
