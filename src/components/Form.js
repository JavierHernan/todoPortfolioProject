import React from 'react';

function Form({setInputText, todos, setTodos, inputText}) { //OR Form(props)
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value) //OR props.setInputText
    };
    const submitTodoHandler = (e) => {
        e.preventDefault(); //prevents page from refreshing and deleting info when plus icon is pressed
        setTodos([
            ...todos, {text: inputText, completed:false, id: Math.random()*1000} //opens up todos item, declares properties and values
        ]);
        setInputText("");
    }
    // const statusHandler = (e) => {
    //     // console.log(e.target.value);
    //     setStatus(e.target.value);
    // }
    return(
        <form>
                <div className="todoTitleContainer">
                <h2 className="todoTitle">This is your Todo List</h2>
                </div>

                <div className="todoInputContainer">
                    <input 
                        value={inputText} 
                        onChange={inputTextHandler} 
                        type="text" 
                        className="todo-input" 
                        placeholder="Enter your task"
                    />
                    <button 
                        onClick={submitTodoHandler} 
                        className="todo-button" 
                        type="submit"
                    > 
                        <i className="fas fa-plus-square"></i>
                    </button>
                    {/* <div className="select">
                        <select onClick={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div> */}
                </div>
            
        </form>
    )
}

export default Form;