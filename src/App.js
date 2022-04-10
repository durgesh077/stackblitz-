import React,{useState,useRef,useEffect,useLayoutEffect} from "react";
import {BrowserRouter } from "react-router"
import Box from "./Box"
import "./style.css";

export default function App() {
  const [inputValue,setInputValue]=useState("")
  const previousInputValue=useRef("_")
  const data=useRef(0)
  useLayoutEffect(
    ()=>{
      previousInputValue.current=inputValue
    },[inputValue]
  ) 
  return (
    <>
      <input 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <h2>Current value:{inputValue}</h2>
      <h2>Previous value:{previousInputValue.current}</h2>
      <button onClick={()=>console.log(previousInputValue.current)}>show</button>
    </>
  );
}
