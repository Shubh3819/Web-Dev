//useEffect(function,[dependencies])
//1.useEffect(() => {}) //Runs after every re-render
//2.useEffect(() => {},[]) //Runs onlu on mount
//3.useEffect(() => {},{value}) //Runs on mount + when value changes


import React,{ useEffect , useState } from "react";
import { use } from "react";

function UseEffect(){

    const[width,setWidth] = useState(window.innerWidth);
    const[height,setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("Event Listener Added");

        return() => {
            window.removeEventListener("resize",handleResize);
        }
    })

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    },[width,height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p>Window Width:{width}px</p>
        <p>Window Height:{height}px</p>
        </>
    );
}

export default UseEffect;