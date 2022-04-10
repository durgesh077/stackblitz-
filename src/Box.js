import React,{useEffect,useRef,useState,useCallback} from "react"
import MenuBar from "./MenuBar"
let a=5;

export default function(props){
  let count=useRef(0)

  const [state,setState]=useState(2)
  useEffect(()=>{
    console.log(count.current)
  },[a])
  let data=useCallback(()=>count.current);
  return (
    <>
    <MenuBar refHook={count}/>
    <div style={{backgroundColor:"gray",height:"fitContent"}} onClick={()=>{
      count.current+=1;
    a+=1;
    setState(state+1)
    }}>
        <b>{count.current}</b>
        <p>{a}</p>
        <p>{state}</p>
        {data()}
      </div>
      </>
  );
}