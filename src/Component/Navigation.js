import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation (){
    const mynav = useNavigate();



    return(
        <>
        <h1>Automatically Navigation</h1>
    
        <button onClick={()=>{mynav('/home')}} >Click</button>
        </>
    )
}

export default Navigation;