import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <header>Todo List</header>
      <main className="flex flex-col gap-5 w-96">
        <h1 className="text-3xl font-bold text-blue-600">원티드에서 해야할 일</h1>
        <TodoForm />
        <TodoItem />
      </main>
      <footer>원티드 프리온보딩 프론트엔드 챌린지 3월 과제</footer>
    </div>
  );
};

export default TodoList;
