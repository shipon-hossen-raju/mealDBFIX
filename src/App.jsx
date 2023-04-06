import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h2 className='text-center bg-green-600 text-3xl font-semibold text-white m-2 p-4'>My Router Practice Project</h2>
    </div>
  )
}

export default App;
