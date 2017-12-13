import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    state = { age: 0 }
    render() {
        return (
            <div>
                <h3>Your age: {this.props.age} year-old</h3>
                <button onClick={this.props.increteAge}>+Click for plus</button>
                <button onClick={this.props.decreteAge}>-Click for minus</button>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return {
        age: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increteAge: () => {
            dispatch({ type: 'INCREMENT' })
        },
        decreteAge: () => {
            dispatch({ type: 'DECREMENT' })
        }
    }
}


export default connect(mapStateToProp, mapDispatchToProps)(Home)