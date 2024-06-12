import './App.css'
import HomePage from './components/HomePage'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App
