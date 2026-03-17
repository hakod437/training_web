import { useState } from 'react'
import papa from '../images/image-qr-code.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="hero">
          <img src={papa} className="base" />
          <h1 className="title">Improve your front-end skills by building projects</h1>
          <p className="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </>
  )
  

}


export default App
