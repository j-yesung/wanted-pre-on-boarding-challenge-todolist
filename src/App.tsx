import { Provider } from 'react-redux';
import TodoList from './components/List/TodoList';
import { store } from './store/config/store';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
