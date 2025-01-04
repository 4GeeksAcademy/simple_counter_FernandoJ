import React from 'react'
import ReactDOM from 'react-dom/client'

let counter = 0

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecoundsCounter from './components/secoundsconter';

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SecoundsCounter seconds={counter}/>
  </React.StrictMode>,
)

setInterval(()=>{
  root.render(
    <React.StrictMode>
      <SecoundsCounter seconds={counter}/>
    </React.StrictMode>,
  )
  counter = counter+1
},1000)  
