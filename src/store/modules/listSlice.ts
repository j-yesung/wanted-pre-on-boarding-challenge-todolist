import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TodoItem {
  id: string;
  text: string;
}

interface TodoListState {
  todos: TodoItem[];
}

const initialState: TodoListState = {
  todos: [],
};

export const listSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = listSlice.actions;
export default listSlice.reducer;
