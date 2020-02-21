import { Http } from '../../config/globalConfig';

export const actionTypes = {
    GET_TOKEN: 'GET_TOKEN',
    LOGOUT: 'LOGOUT',
    LOADING: 'LOADING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    CHANGE: 'CHANGE'
}
export const getToken = (token) => ({
    type: actionTypes.GET_TOKEN,
    token
});

export const removeToken = () => ({
    type: actionTypes.LOGOUT,
});

export const loginSuccess = bool => ({
    type: actionTypes.SUCCESS,
    bool
});

export const loginError = (error) => ({
    type: actionTypes.ERROR,
    error
});

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
});

export const loading = (bool, msg = null) => ({
    type: actionTypes.LOADING,
    isLoading:{
        active: bool,
        msg: msg,
    }
});

export const getUserToken = () => dispatch => {
    localStorage.getItem('access_token')
    .then(res => {
        dispatch(loading(false));
        if(typeof res !== 'undefined') {
            dispatch(getToken(res));
        }
    })
}

export const setUserToken = (token) => dispatch => {
    localStorage.setItem('access_token', token);
    dispatch(loading(false));
    dispatch(loginSuccess(true));
}

export const login = (credentials) => {
    return dispatch => {
        dispatch(loading(true));
        return Http.post('/oauth/token', {
            grant_type: 'password',
            client_id: '',
            client_secret: '',
            username: credentials.username,
            password: credentials.password
        })
        .then(res => {
            dispatch(loading(false));
            if(typeof res !== 'undefined') {
                dispatch(setUserToken(res.data.access_token))
            }
        })

    }
}
