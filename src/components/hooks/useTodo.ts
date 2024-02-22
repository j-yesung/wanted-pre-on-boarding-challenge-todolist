import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../../store/modules/listSlice';
import shortid from 'shortid';

export const useTodo = () => {
  const dispatch = useDispatch();

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>, text: string) => {
    e.preventDefault();
    dispatch(addTodo({ id: shortid.generate(), text, done: false }));
  };

  // 삭제
  const deleteTodoHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return { addTodoHandler, deleteTodoHandler };
};
