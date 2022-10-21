import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
      <div className='container '>
      <div className='d-flex'>
       <div className='Location'>
       <h3>LOCATION</h3>
       <p>2215 John Daniel Drive
          Clark, MO 65243</p>

       </div>


       <div className='Around'>

        <h3>AROUND THE WEB</h3>
        <div className='d-flex'>
        <span className='border rounded-circle p-2 me-2'><i class="fa-brands fa-facebook-f"></i></span>
        <span className='border rounded-circle p-2 me-2'><i class="fa-brands fa-linkedin-in"></i></span>
        <span className='border rounded-circle p-2 me-2'><i class="fa-brands fa-twitter"></i></span>
        <span className='border rounded-circle p-2 me-2'><i class="fa-brands fa-instagram"></i></span>

        </div>
       </div>


      <div className='Freelancer'>
      <h3>ABOUT FREELANCER</h3>
     <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#">Start Bootstrap </a></p>


      </div>


     



      </div>
      
     

      
      </div>
      </div>
    )
  }
}
