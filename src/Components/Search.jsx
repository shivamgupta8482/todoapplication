import React from 'react'
import { useState } from 'react'

const Search = ({arr}) => {
  const [looking,setLooking] = useState("");
  


  return (
    <div style={{height:"50vh",overflow:"scroll"}}>
      <input type="text" value={looking} onChange={(e)=>setLooking(e.target.value)} placeholder="Search bar" />
    {/* <h3>{looking}</h3> */}
    {
      arr.filter((value)=>{
        
        if (looking==""){
         // return value;
         
        }else if(value.carddata.toLowerCase().includes(looking.toLowerCase())){
          return value
         
        }
      }).map(elem=>{
       // console.log(elem.carddata);
        return <li>{elem.carddata}</li>
      })
    }
    </div>
  )
}

export default Search