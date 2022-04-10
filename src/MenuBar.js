import React from "react"
export default function (props){
  let gadgets=["mobile","PCO","watch","TV","radio","fan"];
  return (
    <>
      <nav>
        <ul style={{display:"flex",backgroundColor:"lightpink",color:'maroon',fontSize:"1.5em"}} ref={props.refHook}>
          {
            gadgets.map((it,i)=><li key={i} style={{padding:"5px",margin:"5px",listStyle:"none"}}>{it}</li>)
          }
        </ul>
      </nav>
    </>
  )
}