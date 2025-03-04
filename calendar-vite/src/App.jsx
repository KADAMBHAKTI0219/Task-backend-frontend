import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import Calendarr from './Calendarr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calendarr/>
    </>
  )
}

export default App
