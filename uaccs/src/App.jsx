import { useState } from 'react'
import './index.css'
import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import NavigationSidebar from './components/NavigationSidebar'

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false); // setting NavBar to closed initially

  return (
   <div className = "h-screen w-full flex flex-col overflow-hidden">
    <Background/>
    <Header setNavStatus = {setIsNavOpen}/>
    <NavigationSidebar isOpen = {isNavOpen}/>
    <Footer/>
   </div>
  )
}

export default App
