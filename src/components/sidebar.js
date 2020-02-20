import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeUser } from '../store/actions/users.action'

export class Sidebar extends Component {
    render() {
        return (
            <ul>
                {this.props.users.list.map((user, index) => (
                    <li key={index}>{user} 
                        <button onClick={() => this.props.changeUser(user) }>Selecionar</button>
                    </li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.usersReducer
})

const mapDispatchToProps = dispatch => ({
    changeUser: (user) => dispatch(changeUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)