import React from 'react'
import "../styles/header.css"
import StarIcon from '@mui/icons-material/Star';
const Navbar = () => {
  return (
    <nav class="navbar bg-body">
    <div class="container-fluid">
      <span class="navbar-brand text"><StarIcon/>To-Do</span>
    </div>
  </nav>
  )
}

export default Navbar