import { useState } from 'react' 
import Login from './pages/login'
import SignUpPage from './pages/signup'
import HomePage from './pages/homePage'
import './App.css'
import Productcard from './components/productcard'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header'
import { Routes } from 'react-router-dom'
import AdminPage from './pages/adminPage'

function App() {
 
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <div className='w-full h-[200px] bg-red-400 flex justify-center items-center'>
      <h1 className='text-3xl font-bold underline'>
        Hello world!
      </h1>
    </div>
  
   <Routes path="/">
    <Route path='/' exact component={HomePage}/>
    <Route path='/login' exact component={Login}/>
    <Route path='/signup' exact component={SignUpPage}/>
    <Route path='/admin' exact component={AdminPage}/>
    <Route path='/*' element={<h1>404 not found</h1>}/>

    </Routes>
    
    
     </div>
    
    
      
    </BrowserRouter>
  )
}

export default App
