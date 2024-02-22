import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/store';
import { useTodo } from '../hooks/useTodo';
import Button from '../Common/Button';

const TodoItem = () => {
  const todos = useSelector((state: RootState) => state.listSlice.todos);
  const { deleteTodoHandler } = useTodo();

  return (
    <section>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <Button type="button" onClick={() => deleteTodoHandler(todo.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoItem;
