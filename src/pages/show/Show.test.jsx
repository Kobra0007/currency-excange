import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Show from './Show'

const props = {
  match: {
    params: {
      showId: 1,
    },
  },
}

describe('Show.jsx', () => {
  describe('<Show />', () => {
    const initialState = {
      episode: {
        error: null,
        isLoading: false,
        episodes: [],
        episodeInfo: {},
      },
      show: {
        error: null,
        isLoading: false,
        showInfo: {},
      },
    }

    const mockStore = configureStore()
    test('should render and match shapshot', () => {
      const component = shallow(
        <Provider store={mockStore(initialState)}>
          <Show {...props} />
        </Provider>,
      )

      expect(component).toMatchSnapshot()
    })
  })
})
