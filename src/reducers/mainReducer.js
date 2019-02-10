import { FILL_STATE } from '../constants/index';

const initialState = {
    // folders: [
    //     'Входящие',
    //     'Работа'
    // ],

    folders: [],
    // tasks: [
    //     {
    //         title: "Задача 1",
    //         folder: 'Входящие'
    //     },
    //     {
    //         title: "Задача 2",
    //         folder: 'Входящие'
    //     },
    //     {
    //         title: "Задача 3",
    //         folder: 'Работа'
    //     }
    // ]
    tasks: [],
}
function mainReducer(state = initialState, action = {}) {
    // Когда будет вызван dispatch({ type: 'FILL_STATE', payload: { menu: [...], tasks: [...] } })
    // Будет выполнено следующие условие
    // Содержимое state будет целиком перезаписано payload
    switch (action.type) {
        case FILL_STATE:
            return FILL_STATE_FUNC(state, action); 
        default:
            // Если никакой action.type не удовлетворил условие, то возвращается state без изменения
            // Экшены проходят через все редьюсеры, которые добавили в приложение, и не все экшены могут интересовать нашь редьюсер
            // В итоге редьюсер думает: если экшн с таким типом меня не инстересует, то я верну свое текущее состояние
            // Если не вернуть state, то функция secondReducer вернет по-умолчанию undefined и значением state будет undefined
            return state;
    }

}


function FILL_STATE_FUNC(state, action) {
    
    state = action.payload;
    return state;

}

export default mainReducer;