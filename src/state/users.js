//kaczka
import { database } from '../firebaseConfig'

const SET_USERS = 'users/SET_USERS'


const userAction = data => ({
    type: SET_USERS,
    data
})
//akcja asynchroniczna
export const initUsersSyncAction = () => (dispatch, getState) => {
    database.ref('/jfddl5-users')
        .on(
            'value',
            snapshot => {
                dispatch(userAction(snapshot.val()))
            }
        )
}

export const stopUserSyncAction = () => (dispatch, getState) => {
    database.ref('/jfddl5-users').off()
}

export const addCowToListAction = () => (dispatch, getState) => {
    database.ref('/jfddl5-users').push({
        name: 'Krowa'
    })
}

export const deleteUsersAction = key => (dispatch, getState) => {
    const url = `https://ad-snadbox.firebaseio.com/jfddl5-users/${key}/.json`

    const request = {
        method: 'DELETE'
    }

    fetch(url, request)
}

const initialState = {
    users: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.data
            }
        default:
            return state
    }
}