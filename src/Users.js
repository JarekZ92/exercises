import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initUsersSyncAction, stopUserSyncAction, addCowToListAction, deleteUsersAction } from './state/users'

class Users extends Component {
    componentDidMount() {
        this.props.initUsersSyncAction()
    }

    componentWillUnmount() {
        this.props.stopUserSyncAction()
    }

    render() {
        return (
            <div>
                {
                    this.props.users === null ?
                        'Ładowanie userów...'
                        :
                        Object.entries(this.props.users)
                            .map(([key, value]) => ({
                                ...value,
                                key
                            }))
                            .map(user => (
                                <div
                                    key={user.key}
                                >
                                    {user.name}
                                    <button
                                        onClick={() => this.props.deleteUsersAction(user.key)}
                                    >
                                        X

                                    </button>
                                </div>
                            ))
                }
                <div>
                    <button
                        onClick={this.props.addCowToListAction}
                    >
                        Add 'Krowa' toList
                </button>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users
})

const mapDispatchToProps = dispatch => ({
    deleteUsersAction: key => dispatch(deleteUsersAction(key)),
    addCowToListAction: () => dispatch(addCowToListAction()),
    initUsersSyncAction: () => dispatch(initUsersSyncAction()),
    stopUserSyncAction: () => dispatch(stopUserSyncAction())
})
//connect łączy, opakowuje component Users
export default connect(
    mapStateToProps, //przekazuje stan do propsów
    mapDispatchToProps
)(Users)