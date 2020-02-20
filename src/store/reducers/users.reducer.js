const initialState = {
    users: {
        active: null,
        list: [
            'Fabio',
            'João',
            'Kelly',
            'Gael'
        ]
    }
}

const usersReducer = (state = initialState.users, action) => {
    if(action.type === 'CHANGE_USER') {
        return {
            ...state,
            active: action.payload
        }
    }
    return state;
}

export default usersReducer;