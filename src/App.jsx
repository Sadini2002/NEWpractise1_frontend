import { useState } from 'react' 
import Login from './pages/login'
import SignUpPage from './pages/signup'
import HomePage from './pages/homePage'
import './App.css'
//import Productcard from './components/productcard'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header'
import { Routes } from 'react-router-dom'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'

function App() {
 
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Toaster position='top-right'/>
    
    
  
   <Routes path="/">
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUpPage/>}/>
    <Route path='/test' element={<TestPage/>}/>
    <Route path='/admin' element={<AdminPage/>}/>
    <Route path='/*' element={<h1>404 not found</h1>}/>

    </Routes>
    
    
     </div>
    
    
      
    </BrowserRouter>
  )
}

export default App
