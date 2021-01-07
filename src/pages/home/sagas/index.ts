import { takeEvery } from 'redux-saga/effects'

import {
  FETCH_CATS,
  FAVOURITE_CAT,
  UNFAVOURITE_CAT,
  FETCH_FAVOURITE_CATS,
  VOTE_CAT,
  FETCH_VOTES,
} from '../actions'
import {
  fetchCatsSaga,
  voteCat,
  fetchVotesSaga,
  favouriteCatSaga,
  unFavouriteCatSaga,
  fetchFavouriteCatsSaga,
} from './home.saga'

export default function* rootSaga() {
  yield takeEvery(FETCH_CATS, fetchCatsSaga)
  yield takeEvery(FAVOURITE_CAT, favouriteCatSaga)
  yield takeEvery(UNFAVOURITE_CAT, unFavouriteCatSaga)
  yield takeEvery(FETCH_FAVOURITE_CATS, fetchFavouriteCatsSaga)
  yield takeEvery(VOTE_CAT, voteCat)
  yield takeEvery(FETCH_VOTES, fetchVotesSaga)
}
