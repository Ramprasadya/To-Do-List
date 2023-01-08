import React from 'react'

const Card = (props) => {

    const handleClick=()=>{
        props.onDelete(props.id)
    }


  return (
    <div className="container my-4">
    <div class="card" style={{width: "18rem"}}>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.description}</p>
      <button type="button" onClick={handleClick} class="btn btn-warning">Delete Note</button>
    </div>
  </div>
  </div>
  )
}

export default Card