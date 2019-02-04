import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>To Do List</h1>
        <Link style={linkStyle} to="/">Home</Link>{' | '}
        <Link style={linkStyle} to="/about">About</Link>
      </header>
    </div>
  )
}
const linkStyle = {
  color: 'white'
}
const headerStyle = {
  padding: '10px',
  textAlign: 'center',
  background: 'black',
  color: 'white'
}

export default Header;
