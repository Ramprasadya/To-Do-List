import React from 'react'

const Card = (props) => {
  return (
    <div className="container my-4">
    <div class="card" style={{width: "18rem"}}>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.description}</p>
    </div>
  </div>
  </div>
  )
}

export default Card