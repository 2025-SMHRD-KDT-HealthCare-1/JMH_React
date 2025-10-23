import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'
import Member from './Member'


function App() {
  const [count, setCount] = useState(0)

  let temp = 'ice'

  let program = '무한도전'

  // 객체 비구조화 할당
  let student = {
    name : '임승환',
    age : 20,
    sub : 'web'
  }
  
  console.log(student)

  let { name, age, sub } = student
  console.log(name, age, sub)


  return (
    <>
      <Menu temp={temp} menu="아메리카노" price="4100"></Menu>
      <Menu temp={temp} menu="카페라떼" price="4600"></Menu>
      <Menu menu="에이드" price="5000" />

      <Member pro={program} name='유재석'/>
      <Member pro={program} name='박명수'/>
      <Member pro={program} name='정준하'/>
      <Member pro={program} name='정형돈'/>

    </>
  )
}

export default App
