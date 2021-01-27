import React from 'react';
//Import components
import Todo from "./Todo"
const TodoList = ({todos, setTodos}) => {
    // console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {/* <Todo /> */}
                {todos.map((todo) => (
                    <Todo 
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id} 
                    todo={todo} //need to pass todo for deleteHandler in Todo.js to work
                    text={todo.text} />
                    // ^^key={todo.id} ensures that each rendered Todo has a unique id, that way when a Todo is deleted, 
                    //TodoList can be rendered and will know which Todo's to keep
                ))}

                {/* ^^ accepts todos from App.js, todos is processed in Todo.js. TodoList passes todo to Todo.js and renders a new Todo each time 
                todo.text is the state from App.js. text={todo.text} is how state is passed to Todo.js*/}
            </ul>
        </div>
    )
}

export default TodoList;