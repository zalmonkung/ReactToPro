import React, { Component } from 'react';

class App extends Component {
  state = { data: null, isLoading: false }
  componentDidMount() {
    
  }
  render() {
      return (
          <div>
              <h1>Test</h1>
              <input type="text" name="code"></input>
          </div>
      )
  }
}

export default App
