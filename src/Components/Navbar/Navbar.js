import React, { Component } from 'react'
import './Navbare.css'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg nav fixed-top">
  <div className="container-fluid">
    <a className="navbarbrand ms-5" href="#">START BOOTSTRAP
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="navlink " to="Portfolio">PORTFOLIO</Link>
        <Link className="navlink" to="About">ABOUT</Link>
        <Link className="navlink" to="Contact">CONTACT ME</Link>
      </div>
    </div>
  </div>
</nav>

    )
  }
}
