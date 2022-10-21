import React, { Component } from 'react'
import './Contact.css'
export default class Contact extends Component {
  render() {
    return (
     
 
    <div classname="container " id='contact'>
      <h1 className='text-center'>CONTACT ME</h1>
      <div className='icons text-center'>
    <span className='bootstraph1 text-center'>___</span>
    <i class="fa-solid fa-star icon text-center"></i>
    <span className='bootstraph1 text-center'>___</span>
    </div>
        <form className='form p-5'>
          <div className="mb-3 input">
            <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Full name'/>
          </div>

          <div className="mb-3 input">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Email address' />
          </div>

          <div className="mb-3 input">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Phone number' />
          </div>

          <div className="mb-3 input">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Message' />
          </div>
          
          <button type="submit" className="btn btn-primary">SEND</button>
          
        </form>
      </div>
    

    )
  }
}
