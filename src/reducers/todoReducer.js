import { ADD_TASK } from '../constants/index';

const initialState = {
    folders: [],
    tasks: [],
};

function todoReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return ADD_TASK_FUNC(state, action); 
        default:
            return state;
    }
}

function ADD_TASK_FUNC(state, action) {
    let title = action.payload.title;
    let currentFolder = action.payload.folderName;
    
    //TODO: что не так?
    return { ...state, tasks:  { title, currentFolder } }; 
}

export default todoReducer;