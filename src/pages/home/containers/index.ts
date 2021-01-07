import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { StoreState } from '../../../types'

import { default as HomePage, HomePageProps } from '../components/home-page'
import {
  fetchCats,
  favouriteCat,
  unFavouriteCat,
  fetchFavouriteCats,
  voteCat,
  HomePageActions,
  fetchVotes,
} from '../actions'

type Dispatchers =
  | 'fetchCats'
  | 'favouriteCat'
  | 'unFavouriteCat'
  | 'fetchFavouriteCats'
  | 'voteCat'
  | 'fetchVotes'

const MapStateToProps = (
  state: Required<StoreState>
): Omit<HomePageProps, Dispatchers> => {
  return {
    cats: state.cats?.cats,
    favouriteCatIds: state.cats?.favouriteIds,
    votes: state.cats?.votes,
  }
}

const MapDispatchToProps = (
  dispatch: Dispatch<HomePageActions>
): Pick<HomePageProps, Dispatchers> =>
  bindActionCreators(
    {
      fetchCats,
      favouriteCat,
      unFavouriteCat,
      fetchFavouriteCats,
      voteCat,
      fetchVotes,
    },
    dispatch
  )

const HomePageContainer = connect(MapStateToProps, MapDispatchToProps)(HomePage)

export default HomePageContainer
