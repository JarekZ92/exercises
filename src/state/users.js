import { database } from '../firebaseConfig'

const SET_USERS = 'users/SET_USERS'


const userAction = data => ({
    type: SET_USERS,
    data
})

export const initUsersSyncAction = () => (dispatch, getState) => {
    database.ref('/jfddl5-users')
        .on(
            'value',
            snapshot => {
                dispatch(userAction(snapshot.val()))
            }
        )
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