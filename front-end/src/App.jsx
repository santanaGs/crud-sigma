// Imports
import { Home } from './components/Home'
import { Main } from './components/Main'

// React Router Dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Pacientes } from './components/Pacientes'

//Functional Components
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctor' element={<Main/>}/>
        <Route path='/paciente' element={<Pacientes/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
