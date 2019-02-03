import { ACTION_NAME } from '../constants/index';

const initialState = {
    menu: [
        {
            name: 'Входящие'
        },
        {
            name: 'Работа'
        }
    ],
    tasks: [
        {
            name: 'Задача 1'
        },
        {
            name: 'Задача 2'
        },
        {
            name: 'Задача 3'
        }
    ]
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