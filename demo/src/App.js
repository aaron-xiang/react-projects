import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter name="Counter 1"/>
        <Counter name="Counter 2"/>
        <Counter name="Counter 3"/>
        <Counter name="Counter 4"/>
        <Counter name="Counter 5"/>
      </React.Fragment>  
    );
  }
}

export default App;
