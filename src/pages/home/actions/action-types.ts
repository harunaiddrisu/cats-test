import { Action, Cat, GetFavouriteCatsResponse } from '../../../types'

export const FETCH_CATS = 'FETCH_CATS'
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS'

export const FAVOURITE_CAT = 'FAVOURITE_CAT'
export const UNFAVOURITE_CAT = 'UNFAVOURITE_CAT'

export const FETCH_FAVOURITE_CATS = 'FETCH_FAVOURITE_CATS'
export const FETCH_FAVOURITE_CATS_SUCCESS = 'FETCH_FAVOURITE_CATS_SUCCESS'

export const VOTE_CAT = 'VOTE_CAT'

export const FETCH_VOTES = 'FETCH_VOTES'
export const FETCH_VOTES_SUCCESS = 'FETCH_VOTES_SUCCESS'

export interface CatActionResponseType {
  message?: string
  id?: string | number
}

export interface FetchVoteResponeType {
  value: number
  image_id: string
  sub_id: string
  created_by: string
  id: string
  country_code: string
}

export type HomePageActionCatalog = {
  FETCH_CATS: {}
  FETCH_CATS_SUCCESS: {
    payload: {
      cats: Cat[]
    }
  }
  FAVOURITE_CAT: {
    payload: {
      catId: string
    }
  }
  UNFAVOURITE_CAT: {
    payload: {
      catId: string
    }
  }
  FETCH_FAVOURITE_CATS: {}
  FETCH_FAVOURITE_CATS_SUCCESS: {
    payload: {
      ids: Partial<GetFavouriteCatsResponse>[]
    }
  }
  VOTE_CAT: {
    payload: {
      catId: string
      value: number
    }
  }
  FETCH_VOTES: {}
  FETCH_VOTES_SUCCESS: {
    payload: {
      response: Partial<FetchVoteResponeType>[]
    }
  }
}

export type HomePageActions = Action<HomePageActionCatalog>
