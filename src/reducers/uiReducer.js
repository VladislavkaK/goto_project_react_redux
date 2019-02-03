import { SET_CURRENT_FOLDER } from '../constants/index';

const initialState = {
    currentFolder: null
};
function uiReducer(state = initialState, action = {}) {
  
    switch (action.type) {
        case SET_CURRENT_FOLDER:
            return SET_CURRENT_FOLDER_FUNC(state, action); 
        default:
            return state;
    }

}

function SET_CURRENT_FOLDER_FUNC(state, action) {
    // let names = state.currentFolder.map((item, i) => {
    //     if(i !== action.payload.id) {
    //         return item;
    //     }

    //     return {...item, currentFolder : item};
    // });

    // return { ...state, names}; 
    return state;
}

export default uiReducer;
