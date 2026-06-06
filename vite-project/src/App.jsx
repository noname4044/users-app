import { useState } from 'react'
import './App.css'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
import { Home } from '../components/Home'
import { Students } from '../components/Students'
import { Nav } from '../components/Linknav'

function App() {



  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/students' element={<Students/>}/>
    </Routes>
      </>
  )
}

export default App
