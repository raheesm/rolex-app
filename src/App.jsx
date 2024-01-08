import { useState } from 'react'

import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'

function App() {



  return (
    <>
        <Layout>
        <main>
          <Home/>
        </main>
        </Layout>
     
    </>
  )
}

export default App
