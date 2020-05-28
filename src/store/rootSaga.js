import {all, takeEvery, throttle} from 'redux-saga/effects';
import {actions} from './actions';
import {buttonPressSaga, getItemsSaga} from './sagas';

export default function*() {
    yield all([
        takeEvery(actions.BUTTON_PRESS, buttonPressSaga),
        throttle(1000, actions.GET_ITEMS, getItemsSaga)
    ]);
}

