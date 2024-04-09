import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/card'
import Result from './Components/Result'

function App() {


  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>


  <Route  path="/" element={<Hero/>}/>
  <Route path="/result" element={<Result/>}/>
</Routes>
</BrowserRouter>



</>
  )
}

export default App