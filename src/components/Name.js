import React from 'react';

function Name({inputName, setInputName, submitName, setSubmitName}) {
//need a function that handles input
    const inputNameHandler = (e) => {
        // console.log(e.target.value);
        setInputName(e.target.value);
    };

//need a function that handles submit button
    const submitNameHandler = (e) => {
        e.preventDefault();
        setSubmitName(inputName);
        setInputName("");
    }

    return(
        <form className="nameSection">
            <div className="name" >
                <input 
                    value={inputName}
                    onChange={inputNameHandler} 
                    type="text" 
                    className="nameInput"
                    placeholder="Enter your name"
                    
                />
                <button 
                    className="nameButton" 
                    onClick={submitNameHandler} 
                    type="submit"
                >
                    {/* <i className="fas fa-sign-in-alt"></i> */}
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
        </form>
    )
}

//Start with an input and button, ask for users name. When name is given, change h1 in header from "Hello" to "Hello {users name}"

export default Name;