import React, { useState } from 'react'
import "../styles/note.css"
import AddIcon from '@mui/icons-material/Add';
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
        if(note.title.length && note.description.length > 6){
            props.onNote(note)
            setNote({
                title : "",
                description : ""
            })
            event.preventDefault()
        }else{
            event.preventDefault()
        }
        
       
    }


  return (
    <div className="container">
    <label htmlFor="">Add A Note</label>
    <form action="">
    <div class="mb-3">
    <input type="text"  onChange={onChange} value={note.title} name="title" class="form-control"  />
  </div>
  <div class="mb-3">
    <textarea class="form-control" onChange={onChange} name = "description" value={note.description}  rows="3"/>
  </div>
  <button type="submit" onClick={addNote} class="btn btn-success"><AddIcon/></button>
  </form>
  </div>
  )
}

export default Note