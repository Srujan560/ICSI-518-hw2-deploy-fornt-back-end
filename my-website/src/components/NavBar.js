import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Input from "../pages/UserInput"
import Excuser from '../pages/Excuser'

export default class NavBar extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Input" element={<Input/>}></Route>
          <Route path="/Excuser" element={<Excuser/>}></Route>
        
        </Routes>
        
      </BrowserRouter>
    )
  }
}
