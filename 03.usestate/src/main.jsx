import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Ex01 from './example/Ex02'
import Ex03 from './example/Ex03'
import ExNumber from './example/ExNumber'
import Ex04 from './example/Ex04useRef'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Ex04 />
  // </StrictMode>,
)
