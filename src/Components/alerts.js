
import { useEffect } from "react";

export default function Alert(props){

    // remove the alert pop up when close btn clicked 
    function removeAlert(){
        document.getElementsByClassName('alertDialog')[0].style.display="none";
    }
    
    // as soon as the props get changed display or remove alert 
    useEffect(()=>{
        if(props.err.length!==0)
        document.getElementsByClassName('alertDialog')[0].style.display="flex";
        else
        document.getElementsByClassName('alertDialog')[0].style.display="none";
    },[props])
    
    return(
        <div className="alertDialog transition-all ease-in-out delay-1000 w-[50%] lg:w-[30%] duration-300 border-2 rounded-lg bg-[#F4B3B9] absolute top-[2rem] left-[30%] lg:left-[35%] flex justify-between items-center shadow-xl">
        <p className="p-2 text-red-500 whitespace-wrap w-[90%]">{props.err}</p>
        <button className="text-[#F4B3B9] font-sans mr-2 bg-rose-500 rounded px-1" onClick={removeAlert}>OK</button>
    </div>
    )
}