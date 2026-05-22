import { useState } from 'react'
import './index.css'
import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import {Routes, Route} from 'react-router'
import Home from './pages/Home'
import Programs from './pages/Programs'

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false); // setting NavBar to closed initially

  return (
   <div className = "h-screen w-full flex flex-col overflow-hidden">
    <Background/>
    <Header setNavStatus = {setIsNavOpen}/>
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/programs" element = {<Programs/>}/>

    </Routes>
    <Footer/>
   </div>
  )
}

export default App
