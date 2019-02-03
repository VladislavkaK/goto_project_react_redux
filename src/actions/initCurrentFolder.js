import { SET_CURRENT_FOLDER } from '../constants/index';

export default function initCurrentFolder () {
    
    return function (dispatch, getState) {
        const state = getState();
       
        dispatch({type: SET_CURRENT_FOLDER, payload: { currentFolder: state.mainReducer.folders[0] }});
    };

}