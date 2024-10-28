import React, { useState } from 'react'
import "./ShowHide.css"

function ShowHide() {
   const [show, setShow] = useState(true) 

   function handleClick(e){
        setShow(!show);
   }

    return (
    <div>
        <button onClick={handleClick}>{show ? "Hide" : "Show"} Text</button>
        {show? <h2>Ocultar</h2> : ""}
    </div>
  )
}

export default ShowHide