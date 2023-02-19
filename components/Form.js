import { Button } from '@mui/material'
import React from 'react'

const Form = ({input,setinput,todos,settodos}) => {

  const handlechange=(event)=>{
    setinput(event.target.value)
  }
  const handlesubmit=(event)=>{
    event.preventDefault()
    settodos([...todos,{text:input,completed:false,id:Math.random()*1000}])
  }
  return (
    <form onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handlechange} type="text" id="name" value={input} name="name" />
         <Button variant='contained' type='submit'>Add</Button>
    </form>
  )
}

export default Form