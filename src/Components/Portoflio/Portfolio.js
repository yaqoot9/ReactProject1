import React, { Component } from 'react'
import './portofli.css'
import Items from './Items'
export default class Portfolio extends Component {

state = {
  images:[
    {id:0, name:'LOG CABIN', img:"cabin.png"},
    {id:1, name:'TASTY CAKE', img:'cake.png'},
    {id:2, name:'CIRCUS TENT', img:'circus.png'},
    {id:3, name:'CONTROLLER', img:'game.png'},
    {id:4, name:'LOCKED SAFE', img:'safe.png'},
    {id:5, name:'SUBMARINE', img:'submarine.png'}
    
  ]
}


  render() {

    return (
    
      <div className="container text-center" id='port'>
      <h1>PORTFOLIO</h1>
      <div className='icons'>
    <span className='bootstraph1'>___</span>
    <i class="fa-solid fa-star icon"></i>
    <span className='bootstraph1'>___</span>
    </div>

    

<div className="row">
{

this.state.images.map((item,id) => {

return (

  <Items  key={id} item={item}/>
)


}


)


}

{

this.state.images.map((ele,index) =>{
  return(

<div className="modal fade " id={`exampleModal${ele.id}`}  tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" key={index}>
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">{ele.name}</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
    </div>
    <div className="modal-body ">
        <img src={`assets/images/${ele.img}`} className="modalImg"/>
       <div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p><p>
  </p></div>

    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>


</div>
  )
}




)


}




</div>


</div>






    )
  }
}
