import { Provider } from 'react-redux';
import { store } from './redux/store';

import Home from 'pages/home/Home';
import './styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
