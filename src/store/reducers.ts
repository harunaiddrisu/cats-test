/*
 * combines all th existing reducers
 */

import { combineReducers } from 'redux'
import cats from '../pages/home/reducers'

const rootReducer = combineReducers({
  cats,
})

export default rootReducer
