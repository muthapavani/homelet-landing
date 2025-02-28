import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './Front_end/pages/ladigpage'
import Signup from './Front_end/components/Auth/signup'
import Login from './Front_end/components/Auth/login'




function App() {
 

  return (
    <>
  <Landing></Landing>
  <Signup></Signup>
  <Login></Login>
  

    </>
  )
}

export default App
