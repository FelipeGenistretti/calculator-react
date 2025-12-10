import { useState } from 'react'
import './index.css'
import { Text } from './components/Text/Text'
import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'
import { Calculator } from './components/Calculator/Calculator'
import { OperationHistory } from './components/OperationHistory/OperationHistory'

function App() {
  return (
    <div className='flex max-md:flex-col w-full h-screen items-center sm:items-stretch justify-center gap-2'>
        <Calculator/>
        <OperationHistory/>
    </div>
    
  )
}

export default App
