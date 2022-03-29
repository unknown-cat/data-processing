import React from 'react'

import { Features, Footer, Header } from './container'
import { Navbar, Brands, Choice, Traffic, GetStarted, Invest, Help, Contact } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient_bg">
        <Navbar />
        <Header />
        <Brands />
        <Choice />
      </div>
      <Traffic />
      <Features />
      <GetStarted />
      <Invest />
      <Help />
      <Contact />
      <Footer />
    </div>
  )
}

export default App