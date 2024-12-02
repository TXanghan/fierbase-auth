import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthForm from './Component/AuthForm'
import Home from './Component/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthForm/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

