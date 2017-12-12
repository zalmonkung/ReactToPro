import React, { Component } from 'react'
class Header extends Component {
    componentDidMount() {
        console.log('Header: didMount')
    }
    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps.like, 'props', this.props.like)
    }
    render() {
        console.log('Header: render')
        return (
            <div>
                <h1>{this.props.title} Like {this.props.like}</h1>
            </div>
        );
    }
}
export default Header