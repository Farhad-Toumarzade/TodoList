import './App.css';
import TodoApp from './component/todoApp';

function App() {
  return (
    <div className="App">
      <h1> TodoList - Farhad_Thw</h1>
     <TodoApp />
    </div>
  );
}

export default App;


//todoApp : todos
//todoform => input + button => add todo
// todolist => todos.map(...)