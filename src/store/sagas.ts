/**
 *  sagas init
 *
 */
import { all } from 'redux-saga/effects'
import homePageSagas from '../pages/home/sagas'

export default function* rootSaga() {
  yield all([...homePageSagas()])
}
