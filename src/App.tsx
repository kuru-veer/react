import React from 'react'
import IMAGE from './assets/images/logos.png';


export default function App() {
  return (
    <div>
      <h1>
        App hello -
        {process.env.name}
      </h1>
      <img src='./assets/images/logos.png' alt="" />
    </div>
  )
}
