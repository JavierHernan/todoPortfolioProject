import React, {useState, useEffect} from 'react';

function Time({date, setDate}) {
    //Replaces componentDidMount and componentWillUnmount
 useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
  
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
     function tick() {
      setDate(new Date());
     }
  
     return (
        <div>
          <h2 className="time">{date.toLocaleTimeString()}.</h2>
        </div>
      );
}

export default Time;