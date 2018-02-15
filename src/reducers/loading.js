// src/reducers/loading.js
import { APP_LOADING, APP_DONE_LOADING } from '../actions/user/loading'

export default (state = false, { type } = {}) => {
  switch(type) {
    case APP_LOADING :
      return true

    case APP_DONE_LOADING :
      return false

    default :
      return state
  }
}
