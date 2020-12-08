export const FETCH_TOKEN = 'FETCH_TOKEN';
export const FETCH_STATUS = 'FETCH_STATUS';

export const fetchUser = (user, status) => {
    return {
        type: FETCH_STATUS,
        payload: {
            value: {
                user: user,
                status: status
            },
        }
    }
}