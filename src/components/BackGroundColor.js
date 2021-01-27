import React, {useState, useEffect} from 'react';
import { ChromePicker } from 'react-color';

function BackGroundColor({selectColor, setSelectColor, submitColor, setSubmitColor}) {
    //function that handles selected color, accesses background and assigns to selected color
    const selectColorHandler = (e) => {
        console.log(e.hex)
        setSelectColor(e.hex)
        document.body.style.background = e.hex

        //OR
        // console.log(e.target.value);
        // setSelectColor(e.target.value);
        // document.body.style.background = e.target.value;
    }
    //function that submits color
    const submitColorHandler = (e) => {
        e.preventDefault();
        setSubmitColor(selectColor);
        setSelectColor("");
    }
    return(
        <div>
            <h2 className="colorSelectTitle">Pick a color to Change the Background</h2>
            <div className="backgroundSelect">
                <ChromePicker 
                    onChange={selectColorHandler}
                />

                {/* OR */}
                {/* <select onClick={selectColorHandler} name="colorSelect" className="selector">
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select> */
            }
            </div>
        </div>
    )
}

export default BackGroundColor;