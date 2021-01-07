import { Cat, GetFavouriteCatsResponse } from '../api'
import { FetchVoteResponeType } from '../../pages/home/actions'

export interface StoreState {
  cats: {
    cats: Cat[]
    favouriteIds: Partial<GetFavouriteCatsResponse>[]
    votes: Partial<FetchVoteResponeType>[]
  }
}

export type StoreStateTypes = StoreState[keyof StoreState]
