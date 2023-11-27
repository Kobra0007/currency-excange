import showReducer, { defaultState } from './show'

import {
  showFetchById,
  showFetchByIdFail,
  showFetchByIdSuccess,
} from '../actions/show'

describe('Show fetch reducer', () => {
  it('showFetchById test should be correct', () => {
    expect(showReducer(defaultState, showFetchById())).toEqual({
      ...defaultState,
      isLoading: true,
    })
  })

  it('showFetchByIdSuccess test should be display data in episodes', () => {
    expect(
      showReducer(
        defaultState,
        showFetchByIdSuccess({ id: 123, title: '333' }),
      ),
    ).toEqual({
      ...defaultState,
      showInfo: { id: 123, title: '333' },
    })
  })

  it('episodesFetchFail test should be display error', () => {
    expect(
      showReducer(defaultState, showFetchByIdFail('Error text message')),
    ).toEqual({
      ...defaultState,
      error: 'Error text message',
    })
  })
})
