import {useState} from "react";

const TodoForm = (props) => {
    const [todo, setTodo] = useState("");

    const changeHandler = (e) => {
        console.log(e.target.value);
        setTodo(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };


    return ( 
        <form onsubmit={submitHandler}>
            <input type="text" value={todo} onchange={changeHandler}/>
            <button type="submit">Add</button>
        </form>
     );
}
 
export default TodoForm;