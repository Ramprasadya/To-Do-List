import React from 'react'
import "../styles/header.css"
import EditIcon from '@mui/icons-material/Edit';
const Navbar = () => {
  return (
    <nav class="navbar bg-body">
    <div class="container-fluid">
      <span class="navbar-brand text"><EditIcon/>To-Do</span>
    </div>
  </nav>
  )
}

export default Navbar