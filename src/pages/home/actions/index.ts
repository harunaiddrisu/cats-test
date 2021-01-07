import { Cats, GetFavouriteCatsResponse } from '../../../types'
import {
  FETCH_CATS,
  FETCH_CATS_SUCCESS,
  FAVOURITE_CAT,
  UNFAVOURITE_CAT,
  VOTE_CAT,
  FETCH_FAVOURITE_CATS,
  FETCH_FAVOURITE_CATS_SUCCESS,
  FETCH_VOTES,
  FETCH_VOTES_SUCCESS,
  FetchVoteResponeType,
} from './action-types'

export * from './action-types'

export const fetchCats = () => ({
  type: FETCH_CATS,
})

export const fetchCatsSuccess = (cats: Cats) => {
  return {
    type: FETCH_CATS_SUCCESS,
    payload: {
      cats,
    },
  }
}

export const favouriteCat = (catId: string) => ({
  type: FAVOURITE_CAT,
  payload: {
    catId,
  },
})

export const unFavouriteCat = (catId: string) => ({
  type: UNFAVOURITE_CAT,
  payload: {
    catId,
  },
})

export const fetchFavouriteCats = () => ({
  type: FETCH_FAVOURITE_CATS,
})

export const fetchFavouriteCatsSuccess = (
  ids: Partial<GetFavouriteCatsResponse>[]
) => {
  return {
    type: FETCH_FAVOURITE_CATS_SUCCESS,
    payload: {
      ids,
    },
  }
}

export const voteCat = (catId: string, value: number) => ({
  type: VOTE_CAT,
  payload: {
    catId,
    value,
  },
})

export const fetchVotes = () => ({
  type: FETCH_VOTES,
})

export const fetchVotesSuccess = (
  response: Partial<FetchVoteResponeType>[]
) => {
  return {
    type: FETCH_VOTES_SUCCESS,
    payload: {
      response,
    },
  }
}
