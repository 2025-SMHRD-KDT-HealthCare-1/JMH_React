import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Login = () => {
  const nav = useNavigate();

  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  // 사용자가 입력한 ID : SMHRD, PW : 123
  // 일 때만 Home으로 이동
  // 둘 중 하나라도 다르다면 '잘못 입력했습니다.' 알림 출력

  const btnLogin = () => {
      if (inputId!='' && inputPw!=''){
        if(inputId === 'smhrd' && inputPw === '123'){
          nav('/')
        }
        else{
          alert('잘못 입력했습니다.')
        }
      }
      else{
        alert('값이 비워져있습니다.')
      }
    }

  return (

    

    <div>
        <h1>절거운 React 수업</h1>
        ID : <input onChange={e => setInputId(e.target.value)} />
        <br/>
        PW : <input onChange={e => setInputPw(e.target.value)}/>
        <br/>
        <button onClick={btnLogin}>Login</button>
        {/* <Link to="/"><button>로그인 시도</button></Link> */}
    </div>
  )
}

export default Login