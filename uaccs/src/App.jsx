import { useState } from 'react'
import './index.css'
import Background from './components/Background';

function App() {
    const [count, setCount] = useState(0);

  return (
   <div>
        <Background />
   </div>
  )
}

export default App
