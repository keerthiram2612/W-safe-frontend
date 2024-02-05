import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from "./components/pages/Home"
import About from './components/pages/About'
import Mark from './components/pages/Mark'
import YourFrnd from './components/pages/YourFrnd'
import Login from "./components/pages/Login"
export default function App() {
  return (
    <div className='App'>
     <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/marks" element = {<Mark/>}/>
      <Route path = "/friends" element = {<YourFrnd/>}/>
      <Route path = '/login'element={<Login/>}/>
    </Routes>
    </div>
  )
}
