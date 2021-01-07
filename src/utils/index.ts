import { Action, ActionHandlers } from '../types'

export const createReducer = <S, C extends {}>(
  initialState: S,
  handlers: ActionHandlers<C, S>
) =>
  function reducer(state = initialState, action: Action<C>): S {
    if (handlers.hasOwnProperty(action.type)) {
      // @ts-ignore
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }

interface Currency {
  [index: string]: string
}

export const CURRENCIES: Currency = Object.freeze({ USD: '$' })
