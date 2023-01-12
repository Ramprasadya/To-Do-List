import React from 'react'
import "../styles/style.css"
import DeleteIcon from '@mui/icons-material/Delete';
const Card = (props) => {

    const handleClick=()=>{
        props.onDelete(props.id)
    }


  return (
    <div className="container my-4">
    <div class="card" style={{width: "18rem"}}>
    <div class="card-body d-flex">
      <div>
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.description}</p>
      </div>
     <div className='deleteicon'> <button type="button" onClick={handleClick} class="btn btn-danger"><DeleteIcon/></button></div>
    </div>
  </div>
  </div>
  )
}

export default Card