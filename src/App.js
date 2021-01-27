import React, {useState, useEffect} from "react";
import './App.css';
//importing components
import Time from "./components/Time";
import Name from "./components/Name";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import BackGroundColor from "./components/BackGroundColor";
import LetterColor from "./components/LetterColor";
//import color picker
import { ChromePicker } from 'react-color';

function App() {
//State stuff
const [inputText, setInputText] = useState(''); //this is a state hook [currentState, stateSetter]... this hook updates text in Form and saves info on page
const [todos, setTodos] = useState([]); //this hook is an array of todo List items. Also updates array

//todos is currentState
const [status, setStatus] = useState("all");
const [filteredTodos, setFilteredTodos] = useState([]);

const [date, setDate] = useState(new Date());
const [inputName, setInputName] = useState("");
const [submitName, setSubmitName] = useState();

const [selectColor, setSelectColor] = useState('#fff');
const [submitColor, setSubmitColor] = useState();

//Functions
// const filterHandler = () => {
//   switch(status) {
//     case 'completed' :
//       setFilteredTodos(todos.filter(todo => todo.completed === true));
//       break;
//     case 'uncompleted' :
//       setFilteredTodos(todos.filter(todo => todo.completed === false));
//       break;
//     default:
//       setFilteredTodos(todos);
//       break;
//   }
// }


  return (
    <div className="App">
      <Time date={date} setDate={setDate} />
      <header>
        <h1>Hello {submitName}</h1>
      </header>
      
      <Name 
        inputName={inputName} 
        setInputName={setInputName} 
        submitName={submitName}
        setSubmitName={setSubmitName}
      />
      <Form 
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
      />
      <BackGroundColor 
        selectColor={selectColor}
        setSelectColor={setSelectColor}
        submitColor={submitColor}
        setSubmitColor={setSubmitColor}
      />
      <LetterColor />

    </div>
  );
}

export default App;
