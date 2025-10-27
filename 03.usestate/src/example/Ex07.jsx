import React, { useState } from 'react'

const Ex07 = () => {

    const [inputText, setInputText] = useState('')
    const [ranNum, setRanNum] = useState(Math.floor(Math.random()*50)+1)
    const [text, setText] = useState('')

    console.log(ranNum)

    const handletarget = (event) => {
        setInputText(event.target.value);
    }

    const btn = () => {
        if (inputText.trim() === ''){
            alert('답을 입력해주세요')
        }
        else if (inputText > ranNum){
            setText('더 작은 수 입니다.')
        }
        else if(inputText < ranNum){
            setText('더 큰 수 입니다.')
        }
        else {
            setText('정답!')
        }
    }

  return (
    <div>
        <h1>1~50사이 랜덤 수 맞추기</h1>
        <input onChange={handletarget} value={inputText}/>
        <button onClick={btn}>추측</button>
        <p>{text}</p>
    </div>
  )
}

export default Ex07