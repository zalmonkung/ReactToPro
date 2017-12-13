import React, { Component } from 'react'
import UserList from '../components/Users/UserList'

class Home extends Component {
    state = { data: null, isLoading: false }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then(result => this.setState({ data: result, isLoading: false }))
    }
    render() {
        const { data, isLoading } = this.state
        return (
            <div>
                <h1>Users</h1>
                {isLoading && <div>Loading...</div>}
                <UserList data={data} />
            </div>
        )
    }
}

export default Home