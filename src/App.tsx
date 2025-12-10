import './index.css'
import { Calculator } from './components/Calculator/Calculator'
import { CalculatorProvider } from './context/CalculatorContext/CalculatorContext'
import { OperationHistory } from './components/OperationHistory/OperationHistory'

function App() {
  return (
    <div className='flex max-md:flex-col w-full h-screen items-center sm:items-stretch justify-center gap-2'>
        <CalculatorProvider>
          <Calculator/>
          <OperationHistory/>
        </CalculatorProvider>
    </div>
  )
}

export default App
