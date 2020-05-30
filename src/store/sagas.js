import {select, put} from 'redux-saga/effects';
import axiosInstance from '../lib/api';
import {getItems, populateList} from './actions';

export function* buttonPressSaga (){
    const textValue = yield select(state => state.textValue);

    yield axiosInstance.post('/items.json', {
        title: textValue,
        done: false,
    });
    yield put(getItems());
}

export function* getItemsSaga() {
    const apiResponse = yield axiosInstance.get('/items.json');
    const returnedData = apiResponse.data;

    let componentArray = [];

    Object.keys(returnedData).forEach(key => {
        componentArray.push({
            key,
            done: returnedData[key].done,
            title: returnedData[key].title,
        });
    });
    yield put(populateList(componentArray));
}

export function* markDoneSaga(action) {
    const position = action.payload.position;


    const newItem ={
        // done: !position.done,
        // title: position.title,
    };

    yield axiosInstance.put(`/items/${position.key}.json`, newItem);
    yield put(getItems());
}
