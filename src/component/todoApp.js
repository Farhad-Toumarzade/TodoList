// import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    // const [todos, setTodos] = useState([]);

    return ( 
        <div className="contianer">
            <TodoForm />
            <TodoList />
        </div>
     );
}
 
export default TodoApp;