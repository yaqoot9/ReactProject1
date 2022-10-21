import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
     
      <div className='About' id='about'>
      <div className='container '>
      <h1>ABOUT</h1>
      <div className='icons'>
    <span className='bootstraph1'>___</span>
    <i class="fa-solid fa-star icon"></i>
    <span className='bootstraph1'>___</span>
    </div>
    
    <div className='d-flex'>

     <p className='p_width p-4'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

     <p className='pright_width p-4'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>


    </div>

    <button type="button"  class="btn btn-outline-light button"><i class="fa-sharp fa-solid fa-download"></i>Free Download!</button>
    </div>
</div>

    )
  }
}
