import React from 'react';
// import App from '../App';
// import TodoList from './TodoList';
import audio from "../audioclips/kidscheering.mp3"

// TodoList.js receives todo from App.js, passes todo here to be proccessed. TodoList then renders the result of Todo.js

const Todo = ({text, todo, todos, setTodos}) => {
    // ^^text needs to be passed as a parameter here in order to be processed in "todo-item"

    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        //makes list of todos, el.id, that are not equal to the todo.id that was deleted
        // console.log(todo);
    };
    const completeHandler = () => {
        // let audio = new Audio("./audioclips/kidscheering.mp3")
        // let audio = new Audio(audio)

        setTodos(todos.map((item) => { //map over each item in todo list
            
            if(item.id === todo.id) { //if current item is equal to completed todo

                console.log("COMPLETED")

                // audio.play()

                console.log(document.getElementById("audio").play())
                // document.getElementById("audio").play()

                return { //returns item and reverses completed status
                    
                    ...item, completed: !item.completed  //... opens up item to modify properties, such as .completed. 
                    
                };
            }
            return item; //returns item with no modification to completed status
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            {/* ^^ this is where todo is passed to from TodoList.js, but is called 'text' as declared in TodoList.js */}
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>

            <audio id="audio">
                <source src="../audioclips/kidscheering.mp3"></source>
            </audio>

            <button onClick={deleteHandler} className="trash-btn">
            {/* ^^ clicking on trash-btn invokes deleteHandler */}
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
export default Todo;