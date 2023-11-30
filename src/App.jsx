import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import createStore from './redux/create-store'
import PageWrapper from './PageWrapper'

const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageWrapper />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
