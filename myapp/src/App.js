import React, { Component } from 'react';

class App extends Component {
  state = { name: "" }
  render() {
    return (
      <div>
        <h1>App Page</h1>
        <form>
          <label>
            Name:
            <input type="text"
              name="name"
              placeholder="enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button onClick={this.handleClick}>Change Text</button>
      </div>
    )
  }

  handleClick = e => {
    this.setState({ name: "I am react" })
  }
  handleChange = e => {
    this.setState({ name: e.target.value })
  }
}
export default App;