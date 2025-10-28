import React, { use, useEffect, useState } from 'react'

const Ex07 = () => {

    const [inputText, setInputText] = useState('');
    const [ranNum, setRanNum] = useState(Math.floor(Math.random()*50)+1);
    const [text, setText] = useState('');
    const [chance, setChance] = useState(10);

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
            setChance(chance-1)
        }
        else if(inputText < ranNum){
            setText('더 작은 수 입니다.')
            setChance(chance-1)
        }
        else {
            setText('정답!')
        }
    }

    useEffect(() => {
        if(chance===0){
            alert('종료')
        }
    },[chance])

  return (
    <div>
        <h1>1~50사이 랜덤 수 맞추기</h1>
        <p>기회 : {chance}</p>
        <input onChange={handletarget} value={inputText}/>
        <button onClick={btn}>추측</button>
        <p>{text}</p>
    </div>
  )
}

export default Ex07