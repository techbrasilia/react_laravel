import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Users extends Component {
    render() {
        return (
            <div>
                <h2>Usuário: {this.props.users.active}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.usersReducer
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)