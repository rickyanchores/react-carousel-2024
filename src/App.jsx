import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Carousel from './components/Carousel/Carousel'


const App = () => {
  return (
    <div className='App min-h-screen flex flex-col justify-center items-center'>
          <Carousel />
    </div>
  )
}

export default App
