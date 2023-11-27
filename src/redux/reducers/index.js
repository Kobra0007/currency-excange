import { combineReducers } from 'redux'

import episode from './episode'
import show from './show'

export default combineReducers({
  episode,
  show,
})
