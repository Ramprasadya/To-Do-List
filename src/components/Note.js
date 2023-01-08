import React, { useState } from 'react'

const Note = (props) => {

    const [note, setNote] = useState({
        title : "",
        description : ""
    })

    const onChange=(event)=>{
     
        const {name ,value} = event.target
        setNote((prevData)=>{
            return {
                ...prevData,
                [name] : value
            }
        })

    }

    const addNote=(event)=>{
        props.onNote(note)
        event.preventDefault()
    }


  return (
    <div className="container">
    <form action="">
    <div class="mb-3">
    <label htmlFor="exampleFormControlInput1" class="form-label">Title</label>
    <input type="text" onChange={onChange} value={note.title} name="title" class="form-control"  />
  </div>
  <div class="mb-3">
    <label htmlFor="exampleFormControlTextarea1" class="form-label">Description</label>
    <textarea class="form-control" onChange={onChange} name = "description" value={note.description}  rows="3"/>
  </div>
  <button type="submit" onClick={addNote} class="btn btn-success">Add Note</button>
  </form>
  </div>
  )
}

export default Note