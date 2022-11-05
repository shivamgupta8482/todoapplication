import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Add = ({text,setText,handleAdd,toggle}) => {
   

 
  return (
    <div>
        <input value={text} type="text" onChange={(e)=>setText(e.target.value)}/>
       {toggle? <button onClick={handleAdd}>Add</button> :  <button onClick={handleAdd}>Edit</button>}
    </div>
  )
}

export default Add