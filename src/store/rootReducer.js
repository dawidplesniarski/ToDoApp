import {actions} from './actions';

const initialState = {
    list: [],
    textValue: '',
    modalIsVisible: false,
    modalText: '',
    currentKey: 0,
};
export default function (state = initialState, action) {
    switch(action.type){
        case actions.DELETE_ITEM:

            let deleteListState = {...state}
            let deleteIndex = 0;

            deleteListState.list = [...deleteListState.list];

            deleteListState.list.forEach((item, index) =>{
                if(item.key !== action.payload.itemKey){
                    return null;
                }
                deleteIndex = index;
                return false;
            });
            deleteListState.list.splice(deleteIndex, 1);
            return deleteListState;

        case actions.EDIT_ITEM:
         let editListState = {...state};

         editListState.modalIsVisible = true;
         editListState.modalText = action.payload.text;
         editListState.currentKey = action.payload.itemKey;

         return editListState;

        case actions.SAVE_ITEM:
            let saveItemState = {...state};

            saveItemState.list = [...saveItemState.list]

            saveItemState.list.forEach(item =>{
                if(item.key !== saveItemState.currentKey){
                    return null;
                }
                item.title = saveItemState.modalText;
                return false;
            });
            saveItemState.modalIsVisible = false;
            return saveItemState;

        case actions.MARK_DONE:
            let markDoneState = {...state};

            markDoneState.list = [...markDoneState.list];

            markDoneState.list.forEach(item => {
                if(item.key !== action.payload.key){
                    return null;
                }
                item.done = !item.done;
                return false;
            });
            return markDoneState;

        case actions.CHANGE_TEXT:
            let changeTextState = {...state};
            changeTextState.textValue = action.payload.text;
            return changeTextState;

        case actions.BUTTON_PRESS:

            let buttonPressState = {...state};

            buttonPressState.list = [...buttonPressState.list];

            if(!buttonPressState.textValue){
                return;
            }
            buttonPressState.list.push({
                key: buttonPressState.list.length +1,
                title: buttonPressState.textValue,
                done: false
            });
            return buttonPressState;

        case actions.CLEAR_FINISHED:
            let clearFinishedState = {...state};
            let notFinished = [];

            clearFinishedState.list.forEach((item, index) => {
                if(item.done){
                    return null;
                }
                notFinished.push(item);
            });
            clearFinishedState.list = notFinished;
            return clearFinishedState;
            return state;

        case actions.POPULATE_LIST:
            let populateListState ={...state};
            populateListState.list = action.payload.items;
            return populateListState;

        default:
            return state;
    }
};

