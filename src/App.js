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
  return (
    <>
     <Navbar/>
     <Note
      onNote={addNote}
     />
     {
      notes.map((item)=>{
        return <Card  title={item.title} description = {item.description} />
      })
     }
     
    </>
  );
}

export default App;
