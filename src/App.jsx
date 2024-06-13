import './App.css'
import HomePage from './components/HomePage'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./components/LoginPage"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </div>
  )
}

export default App
