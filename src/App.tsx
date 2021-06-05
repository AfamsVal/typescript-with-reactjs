import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

const App = () => {
  // const [age, setAge] = useState<number | string>("5");

  return (
    <>
      <div className='container'>
        <Header />
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default App
