import React, { Component } from 'react'

export default class items extends Component {
  render() {
    let{id,name,img}=this.props.item
    
    return (
      
     
      <>  
  <div className="col-md-4">
    <div>
        <div className="p-3 "> <a href="#"  data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}><img src={`assets/images/${img}`} className='img rounded hover'  /></a></div>
      </div>
      <div/>

</div>



</>
    );
  }
}
