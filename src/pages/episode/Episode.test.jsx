import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Episode from './Episode'

const props = {
  match: {
    params: {
      episodeId: 4,
    },
  },
}
describe('Episode.jsx', () => {
  describe('<Episode />', () => {
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
          <Episode {...props} />
        </Provider>,
      )

      expect(component).toMatchSnapshot()
    })
  })
})
