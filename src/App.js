import React from 'react'
import {useState} from "react"
import Navbar from "./components/Navbar"
import Note from "./components/Note"
import Card from "./components/Card";
function App() {

  const [notes, setNotes] = useState([])
  
  const addNote=(newNote)=>{
     setNotes((prevNotes)=>{
      return [...prevNotes , newNote ]
     })
  }

  const onDelete=(id)=>{
    setNotes((prevNotes)=>{
      
      return prevNotes.filter((item,index)=>{
        return index !== id
      })

    })
  }

  return (
    <>
     <Navbar/>
     <Note
      onNote={addNote}
     />
     {
      notes.map((item,index)=>{
        return <Card  
        key = {index}
        id = {index}
        title={item.title} 
        description = {item.description} 
         onDelete={onDelete} />
      })
     }
     
    </>
  );
}

export default App;
