import { useState } from 'react'
import './index.css'
import Background from './components/Background';
import Footer from './components/Footer'

function App() {
    const [count, setCount] = useState(0);

  return (
   <div>
    <Background/>
    <Footer/>
   </div>
  )
}

export default App
