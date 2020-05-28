export const actions = {
    DELETE_ITEM: '[List] Delete Item',
    EDIT_ITEM: '[List] Edit Item',
    SAVE_ITEM: '[List] Save Item',
    MARK_DONE: '[List] Mark Done',
    CHANGE_TEXT: '[Input] Change Text',
    BUTTON_PRESS: '[Input] Button Press',
    CLEAR_FINISHED: '[Input] Clean Finished',
    GET_ITEMS: '[List] Get Items',
    POPULATE_LIST: '[List] Populate List',

};

export function deleteItem(itemKey){
    return{
        type:actions.DELETE_ITEM,
        payload:{
            itemKey: {itemKey},
        }
    }
}

export function editItem(itemKey, text){
    return{
        type:actions.EDIT_ITEM,
        payload: {itemKey, text},
    };
}

export function saveItem(){
    return{
        type:actions.SAVE_ITEM,
    }
}


export function markDone(key){
    return{
        type:actions.MARK_DONE,
        payload: {key},
    }
}

export function changeText(text){
    return{
        type:actions.CHANGE_TEXT,
        payload: {text},
    }
}

export function buttonPress(){
    return{
        type:actions.BUTTON_PRESS,
    }
}

export function clearFinished(){
    return{
        type:actions.CLEAR_FINISHED,
    }
}
export function getItems(){
    return {
        type: actions.GET_ITEMS,
    }
}
export function populateList(items) {
    return {
        type: actions.POPULATE_LIST,
        payload: {items},
    }
}
