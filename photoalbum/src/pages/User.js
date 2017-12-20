import React, { Component } from 'react'
import UserList from '../components/Users/UserList'
import { connect } from 'react-redux'
import { loadUsers } from '../actions'

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(loadUsers())
    }
    render() {
        const { users } = this.props
        if (users.isRejected) {
            return <div>Error...</div>
        }
        return (

            <div>
                <h1>Users</h1>
                <UserList data={users.data} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Home)