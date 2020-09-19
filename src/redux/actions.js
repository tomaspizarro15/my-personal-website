export const FETCH_TOKEN = 'FETCH_TOKEN';
export const FETCH_USER = 'FETCH_USER';

export const storeToken = (token) => {
    return {
        type: FETCH_TOKEN,
        payload: {
            token: token,
        }
    }
}
export const fetchToken = (token) => {
    return dispatch => {
        fetch('http://localhost:8080/', {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": token,
            }
        })
            .then((promise) => promise.json())
            .then(response => {
                dispatch(fetchUser(response.user))
            })
            .catch()
    }
}
export const fetchUser = (user) => {
    return {
        type: FETCH_USER,
        payload: {
            value: user,
        }
    }
}