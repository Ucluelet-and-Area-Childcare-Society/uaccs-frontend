import { useState } from 'react'
import './index.css'
import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false); // setting NavBar to closed initially

  return (
   <div className = "h-screen w-full flex flex-col overflow-hidden">
    <Background/>
    <Header setNavStatus = {setIsNavOpen}/>
    <Footer/>
   </div>
  )
}

export default App
