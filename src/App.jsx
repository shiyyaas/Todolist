// import { useState } from 'react'
import './App.css'
import Core from './components/Core'
import Task from './components/Task'

function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen items-center justify-center bg-blue-400'>
        <Core />
        <Task />
      </div>
    </>
  )
}

export default App