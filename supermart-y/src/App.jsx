
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import {Route, Router, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <nav>

          
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Navbar' element={<Navbar />} />


        </Routes>
     </Router>
     
    </>
  )
}

export default App
