import * as Actions from "../actions/actions";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.ADD_USER_DATA:
            return (state = {...action.payload.data});

        case Actions.UPDATE_USER_DATA:
            return (state = {...state, ...action.payload.data});

        case Actions.DELETE_USER_DATA:
            return (state = {});

        default:
            return state;
    }
};

export default userReducer;