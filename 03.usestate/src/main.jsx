import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Ex01 from './example/Ex02'
import Ex03 from './example/Ex03'
import ExNumber from './example/ExNumber'
import Ex04 from './example/Ex04useRef'
import Ex05 from './example/Ex05map'
import Ex06 from './example/Ex06'
import Ex07 from './example/Ex07'
import Ex08 from './example/Ex08'
import Ex09 from './example/Ex09'
import ExDiceGame from './example/ExDiceGame'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <ExDiceGame/>
    // </StrictMode>,
)
