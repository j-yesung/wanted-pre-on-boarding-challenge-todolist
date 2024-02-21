import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TodoListState {
  todos: string[];
}

const initialState: TodoListState = {
  todos: [],
};

export const listSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      console.log('action: ', action);
      // logic
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      // logic
    },
  },
});

export const { addTodo, removeTodo } = listSlice.actions;
export default listSlice.reducer;
