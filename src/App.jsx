import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import createStore from './redux/create-store'
import Main from './pages/main/Main'

const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  )
}

export default App
