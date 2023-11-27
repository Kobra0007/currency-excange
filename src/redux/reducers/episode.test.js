import episodeReducer, { defaultState } from './episode'
import {
  episodesFetch,
  episodesFetchFail,
  episodesFetchSuccess,
  episodeFetchById,
  episodeFetchByIdFail,
  episodeFetchByIdSuccess,
} from '../actions/episode'

describe('Episode fetch reducer', () => {
  it('episodeFetch test should be correct', () => {
    expect(episodeReducer(defaultState, episodesFetch())).toEqual({
      ...defaultState,
      isLoading: true,
    })
  })

  it('episodeFetchSuccess test should be display data in episodes', () => {
    expect(
      episodeReducer(defaultState, episodesFetchSuccess([1, 2, 3])),
    ).toEqual({
      ...defaultState,
      episodes: [1, 2, 3],
    })
  })

  it('episodesFetchFail test should be display error', () => {
    expect(
      episodeReducer(defaultState, episodesFetchFail('Error text message')),
    ).toEqual({
      ...defaultState,
      error: 'Error text message',
    })
  })
})

describe('Episode fetch by id reducer', () => {
  it('episodeFetchById test should be correct', () => {
    expect(episodeReducer(defaultState, episodeFetchById())).toEqual({
      ...defaultState,
      isLoading: true,
    })
  })

  it('episodeFetchByIdSuccess test should be display data in episodes', () => {
    expect(
      episodeReducer(
        defaultState,
        episodeFetchByIdSuccess({ id: 10, title: ' Test title' }),
      ),
    ).toEqual({
      ...defaultState,
      episodeInfo: { id: 10, title: ' Test title' },
    })
  })

  it('episodeFetchByIdFail test should be display error', () => {
    expect(
      episodeReducer(defaultState, episodeFetchByIdFail('Error text message')),
    ).toEqual({
      ...defaultState,
      error: 'Error text message',
    })
  })
})
