import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from './reducer'

const state = {
  loading : false,
  results : {},
  token : ''
}

export const initStore = (initialState = state) => {
  return createStore( reducer, initialState, applyMiddleware(thunkMiddleware) )
}
