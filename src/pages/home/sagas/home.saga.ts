import { put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import {
  fetchCatsSuccess,
  fetchFavouriteCats as fetchFavouriteCatsAction,
  fetchVotes as fetchVotesAction,
  HomePageActionCatalog,
  fetchFavouriteCatsSuccess,
  fetchVotesSuccess,
} from '../actions'
import {
  fetchCats,
  fetchFavouriteCats,
  fetchVotes,
  postCatAction,
  unfavouriteCat,
} from '../../../api'
import { Action } from '../../../types/store'

const MESSAGE_SUCCESS_STATE = 'SUCCESS'

const toastProps = {
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

function showErrorToast(message: string) {
  toast.error(message, {
    position: 'top-center',
    ...toastProps,
  })
}

function showSuccessToast(message: string) {
  toast.success(message, {
    position: 'top-center',
    ...toastProps,
  })
}

export function* fetchCatsSaga() {
  try {
    const data = yield fetchCats()
    if (data) {
      yield put(fetchCatsSuccess(data))
    } else {
      showErrorToast('Fetch Cats api call failed!')
    }
  } catch (err) {
    console.log(err)
  }
}

export function* favouriteCatSaga({
  payload,
}: Action<Pick<HomePageActionCatalog, 'FAVOURITE_CAT'>>) {
  try {
    if (payload) {
      const { message } = yield postCatAction('/favourites', payload?.catId)
      if (message === MESSAGE_SUCCESS_STATE) {
        yield put(fetchFavouriteCatsAction())
        showSuccessToast('favourite success!')
      } else {
        showErrorToast('favourite cat api call failed!')
      }
    } else {
      showErrorToast('Cat Id is not provided')
    }
  } catch (err) {
    console.log(err)
  }
}

export function* unFavouriteCatSaga({
  payload,
}: Action<Pick<HomePageActionCatalog, 'UNFAVOURITE_CAT'>>) {
  try {
    if (payload) {
      const { message } = yield unfavouriteCat(`/favourites/${payload.catId}`)
      if (message === MESSAGE_SUCCESS_STATE) {
        yield put(fetchFavouriteCatsAction())
        showSuccessToast('unfavourite success!')
      } else {
        showErrorToast('unfavourite cat api call failed!')
      }
    } else {
      showErrorToast('Cat Id is not provided')
    }
  } catch (err) {
    console.log(err)
  }
}

export function* fetchFavouriteCatsSaga() {
  try {
    const data = yield fetchFavouriteCats()
    if (data) {
      yield put(fetchFavouriteCatsSuccess(data))
    } else {
      showErrorToast('Fetch favourite cats api call failed!')
    }
  } catch (err) {
    console.log(err)
  }
}

export function* voteCat({
  payload,
}: Action<Pick<HomePageActionCatalog, 'VOTE_CAT'>>) {
  try {
    const { message } = yield postCatAction(
      '/votes',
      payload.catId,
      payload.value
    )

    if (message === MESSAGE_SUCCESS_STATE) {
      yield put(fetchVotesAction())
      showSuccessToast(
        `🦄${payload?.value === 1 ? 'Upvote' : 'Downvote'} Success!`
      )
    } else {
      showErrorToast(`${payload?.value === 1 ? 'Upvote' : 'Downvote'} Failed!`)
    }
  } catch (err) {
    console.log(err)
  }
}

export function* fetchVotesSaga() {
  try {
    const data = yield fetchVotes()
    if (data) {
      yield put(fetchVotesSuccess(data))
    } else {
      showErrorToast('Fetch Votes Failed')
    }
  } catch (err) {
    console.log(err)
  }
}
