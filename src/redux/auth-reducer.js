const LOGIN = 'LOGIN'
const SIGNIN = 'SIGNIN'
const ERROR = 'ERROR'
const SIGNOUT = 'SIGNOUT'
const GET_CURRENT_USER = 'GET_CURRENT_USER'

let initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isAuth: localStorage.getItem('isAuth') === '1' ? 1 : 0,
    errorMsg: '',
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGIN: {
            return {
                ...state,
                ...action.user,
            }
        }
        default:
            return state
    }

}

export const signin = (user) => ({ type: LOGIN, user, isAuth: 1 })

export const registrationUserTC = (data) => (dispatch) => {
    dispatch(signin(data))
}

export default authReducer