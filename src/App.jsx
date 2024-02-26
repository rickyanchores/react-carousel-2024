import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CarouselTransition } from './components/CarouselTransition/CarouselTransition'



const App = () => {
  return (
    <div className='App flex flex-col justify-center items-center'>
          <h1>Carousel Material Tailwind</h1>
          <CarouselTransition />
    </div>
  )
}

export default App
