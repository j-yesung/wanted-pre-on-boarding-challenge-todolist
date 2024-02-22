import { useInput } from '../hooks/useInput';
import Button from '../Common/Button';
import { useTodo } from '../hooks/useTodo';

const TodoForm = () => {
  const { addTodoHandler } = useTodo();
  const { value, onChangeHandler } = useInput('');

  return (
    <section>
      <form onSubmit={e => addTodoHandler(e, value)}>
        <input
          type="text"
          id="todo-input"
          name="todo-input"
          value={value}
          placeholder="오늘 할 일을 작성해 주세요."
          onChange={onChangeHandler}
        />
        <Button type="submit">Add</Button>
      </form>
    </section>
  );
};

export default TodoForm;
