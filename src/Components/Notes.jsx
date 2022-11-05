import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Notes = ({dataarr,handleDelete,handleEdit}) => {

  return (
    <div>
        {
            dataarr.map(item=>(
               <div key={item.id}>
                <li >{item.carddata}
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                <button onClick={()=>handleEdit(item.id)}>EDIT</button>
                </li>
                
               </div>
            )
                
                )
        }
    </div>
  )
}

export default Notes