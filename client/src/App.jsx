import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Dashboard1 from './views/Dashboard1'
import Dashboard from './views/Dashboard'
import Create from './views/Create'
import Update from './views/Update';
import Details from './views/Details'
import Create1 from './views/Create1'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard1/>}/>
        <Route path='/create' element={<Create1/>}/>
        <Route path='/project/:id/update' element={<Update/>}/>
        <Route path='/project/:id/details' element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
