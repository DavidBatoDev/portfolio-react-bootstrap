import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar/Navbar'
import { Banner } from './components/Banner/Banner'

function App() {

  return (
    <div>
      <NavBar />
      <Banner />
      <h1>Skills</h1>
      <h1>Projects</h1>
      <h1>Contact</h1>
      <h1>Footer</h1>
    </div>
  )
}

export default App
