import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/store';
import { useTodo } from '../hooks/useTodo';
import Button from '../Common/Button';

const TodoItem = () => {
  const todos = useSelector((state: RootState) => state.listSlice.todos);
  const { deleteTodoHandler } = useTodo();

  return (
    <section className="w-full">
      <ul className="flex flex-col gap-5">
        {todos.map(todo => (
          <li className="flex justify-between border-solid border-2 border-slate-500 rounded-md p-2" key={todo.id}>
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
