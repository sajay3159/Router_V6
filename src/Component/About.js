import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>Welcome to About page</h1>
      <ul >
        <li><Link to="/"> Home Page</Link></li>
        <li><Link to="/about"> About Page</Link></li>
        <li><Link to="/Contact us"> Contact Us</Link></li>
        <li><Link to="/user/anil">Anil</Link> </li>
       <li><Link to="/user/shelter">Shelter</Link></li>
       <li><Link tp="/navigation" >Navigation Page</Link></li>
        
      </ul>
    </div>
  )
}
