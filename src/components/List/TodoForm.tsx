import { useInput } from '../../hooks/useInput';
import Button from '../Common/Button';
import { useTodo } from '../../hooks/useTodo';
import { useRef } from 'react';

const TodoForm = () => {
  const { addTodoHandler } = useTodo();
  const { value, onChangeHandler } = useInput('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section>
      <form className="flex gap-3" onSubmit={e => addTodoHandler(e, value, inputRef)}>
        <input
          className="border-solid border-2 border-slate-500 rounded-md p-2 w-96"
          ref={inputRef}
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
