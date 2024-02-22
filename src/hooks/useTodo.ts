import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../store/modules/listSlice';
import shortid from 'shortid';
import { RefObject } from 'react';

export const useTodo = () => {
  const dispatch = useDispatch();

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>, text: string, ref: RefObject<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(addTodo({ id: shortid.generate(), text }));
    if (ref.current) ref.current.value = '';
  };

  const deleteTodoHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return { addTodoHandler, deleteTodoHandler };
};
