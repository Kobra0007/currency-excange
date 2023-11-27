import { createActions } from 'redux-actions'

export const {
  showFetchById,
  showFetchByIdFail,
  showFetchByIdSuccess,
} = createActions(
  'SHOW_FETCH_BY_ID',
  'SHOW_FETCH_BY_ID_FAIL',
  'SHOW_FETCH_BY_ID_SUCCESS',
)
