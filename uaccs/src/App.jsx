import { useState } from 'react'
import './index.css'
import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    const [count, setCount] = useState(0);

  return (
   <div className = "h-screen w-full flex flex-col overflow-hidden">
    <Background/>
    <Header/>
    <Footer/>
   </div>
  )
}

export default App
