import {all, takeEvery, throttle} from 'redux-saga/effects';
import {actions} from './actions';
import {buttonPressSaga, getItemsSaga, markDoneSaga} from './sagas';

export default function*() {
    yield all([
        takeEvery(actions.BUTTON_PRESS, buttonPressSaga),
        takeEvery(actions.MARK_DONE, markDoneSaga),
        throttle(1000, actions.GET_ITEMS, getItemsSaga),
    ]);
}

