import { ACTION_NAME } from '../constants/index';

const initialState = {
    nothing: 'here'
}
function mainReducer(state = initialState, action = {}) {

    switch (action.type) {
        case ACTION_NAME:
            return ACTION_NAME_FUNC(state, action);
        default:
            return state;
    }

}


function ACTION_NAME_FUNC(state, action) {

    return state;

}

export default mainReducer;