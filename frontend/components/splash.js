import React from "react"
import { Link } from "react-router"

export default (props) => {
  return  (<div className="banner-container">
        <div className="banner"></div>
        <div>
          <p>One-stop shop for Round Robin Tournament Management..</p>
          <button><Link to="/login">Log In</Link></button>
          <button><Link to="/signup">Sign Up</Link></button>
        </div>
  </div>)
}