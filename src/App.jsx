import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar/Navbar'
import { Banner } from './components/Banner/Banner'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'

function App() {

  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <h1>Contact</h1>
      <h1>Footer</h1>
    </div>
  )
}

export default App
