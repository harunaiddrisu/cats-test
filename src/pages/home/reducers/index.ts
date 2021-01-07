import { HomePageActionCatalog } from '../actions'
import { StoreStateTypes, StoreState } from '../../../types'
import { createReducer } from '../../../utils'

const initialState: StoreState['cats'] = {
  cats: [],
  favouriteIds: [],
  votes: [],
}

export default createReducer<StoreStateTypes, HomePageActionCatalog>(
  initialState,
  {
    FETCH_CATS: (state) => ({
      ...state,
    }),

    FETCH_CATS_SUCCESS: (state, { payload: { cats } }) => {
      return {
        ...state,
        cats,
      }
    },

    FAVOURITE_CAT: (state) => ({
      ...state,
    }),

    UNFAVOURITE_CAT: (state) => ({
      ...state,
    }),

    FETCH_FAVOURITE_CATS: (state) => ({
      ...state,
    }),

    FETCH_FAVOURITE_CATS_SUCCESS: (state, { payload: { ids } }) => {
      return {
        ...state,
        favouriteIds: ids,
      }
    },

    VOTE_CAT: (state) => ({
      ...state,
    }),

    FETCH_VOTES: (state) => ({
      ...state,
    }),

    FETCH_VOTES_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        votes: payload.response,
      }
    },
  }
)
