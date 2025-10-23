import React, { useState } from 'react'

const Ex03 = () => {
    const [myNum, setMyNum] = useState();
    const [comNum, setComNum] = useState();
    const [result, setResult] = useState('');
    
    // 1. 버튼 클릭 시 내가 선택한 숫자를 출력
    // 2. 버튼 클릭 시 1~3사이 랜덤 수 출력
    // 3. 사용자가 클릭한 숫자와 랜덤 수를 비교 후 결과 출력

    // const btn1 = () => {
    //     let random = parseInt(Math.random() * 3) + 1
    //     setRanValue(1)
    //     setRanValue1(random)
    //     if(1 === random){
    //         setResult('정답!')
    //     }
    //     else {
    //         setResult('땡!')
    //     }
    // }

    // const btn2 = () => {
    //     let random = parseInt(Math.random() * 3) + 1
    //     setRanValue(2)
    //     setRanValue1(random)
    //     if(2 === random){
    //         setResult('정답!')
    //     }
    //     else {
    //         setResult('땡!')
    //     }
    // }

    // const btn3 = () => {
    //     let random = parseInt(Math.random() * 3) + 1
    //     setRanValue(3)
    //     setRanValue1(random)
    //     if(3 === random){
    //         setResult('정답!')
    //     }
    //     else {
    //         setResult('땡!')
    //     }
    // }
    const btn = (btnNum) => {
        let ranNum = Math.floor(Math.random() * 3) + 1
        setMyNum(btnNum)
        setComNum(ranNum)
        // if(n === ranNum){
        //     setResult('정답!')
        // }
        // else {
        //     setResult('땡!')
        // }
    }

    
  return (
    <div>
        <button onClick={() => btn(1)}>1</button>
        <button onClick={() => btn(2)}>2</button>
        <button onClick={() => btn(3)}>3</button>

        <div>
            <p>내가 입력한 숫자 : {myNum}</p>
            <p>컴퓨터가 입력한 숫자 : {comNum}</p>
            <p>결과 : {myNum == comNum ? "정답" : "땡"}</p>
        </div>
    </div>
  )
}

export default Ex03