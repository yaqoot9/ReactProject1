import React, { Component } from 'react'
import About from './About/About';
import Contact from './Contact/Contact';
import Portfolio from './Portoflio/Portfolio';
import StartBootstrap from './Bootstrap/StartBootstrap';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Copyright from './Copyright/Copyright';
import Notfound from './Notfound';

import {Routes,Route} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      
      <Routes>
      <Route path='/'  element={<StartBootstrap/>}>   </Route>
       <Route path='Bootstrap'  element={<StartBootstrap/>}>   </Route>
       <Route path='Portfolio'  element={<Portfolio/>}>   </Route>
       <Route path='About'  element={<About/>}>   </Route>
       <Route path='Contact'  element={<Contact/>}>   </Route>
       <Route path='*'  element={<Notfound/>}>   </Route>
      </Routes>
    <Footer/>
    <Copyright/>
    </>
    )
  }
}
