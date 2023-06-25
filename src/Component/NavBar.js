import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Link to="/"> Home Page</Link><br/><br/>
     <Link to="/about"> About Page</Link><br/><br/>
     <Link to="/navigation">Navigation pageLink</Link><br/><br/>
     
    </div>
  )
}
