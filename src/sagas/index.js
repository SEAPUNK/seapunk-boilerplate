import {delay} from 'redux-saga'
import {call, put, take} from 'redux-saga/effects'

import {TOGGLE_NICE} from '../actions'

export default function * appSaga (getState) {
  yield [
    call(niceWatcher, getState),
    call(nicePutter, getState)
  ]
}

function * niceWatcher (getState) {
  const action = yield take(TOGGLE_NICE)
  console.log('nice switched', action)
}

function * nicePutter (getState) {
  yield call(delay, 1000)
  yield put({type: TOGGLE_NICE})
}
