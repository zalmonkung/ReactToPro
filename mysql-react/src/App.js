import React, { Component } from 'react';

class App extends Component {
  state = { data: null, isLoading: false }
  componentDidMount() {
    fetch('https://192.168.2.127:8000')
    .then(result => this.setState({ data: result }))
  }
  render() {
      const { data, isLoading } = this.state
      return (
          <div>
              <h1>Users</h1>
              {isLoading && <div>Loading...</div>}
              <h1> {data} </h1>
          </div>
      )
  }
}

export default App
