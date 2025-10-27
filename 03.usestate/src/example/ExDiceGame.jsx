import React, { useState } from 'react'

const ExDiceGame = () => {

    // 1. 버튼 클릭 시, 주사위 이미지 랜덤하게 변경(둘 다)
    // 2. 주사위의 숫자를 비교 > 더 큰 Score 값을 +1 증가
    // 3. Score값이 먼저 10에 도달한 결과를 출력
    //    >> "USER 승리" or "COM 승리"
    let img = ['./src/img/Dice1.png', './src/img/Dice2.png', './src/img/Dice3.png', './src/img/Dice4.png', './src/img/Dice5.png', './src/img/Dice6.png'];

    const [userNum, setUserNum] = useState(0);
    const [comNum, setComNum] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [comScore, setComScore] = useState(0);
    // const [result, setResult] = useState('');

    

    const btn = () => {
        let ranCom = Math.floor(Math.random() * 6)
        let ranUser = Math.floor(Math.random() * 6)
        setComNum(ranCom)
        setUserNum(ranUser)

        if (ranUser > ranCom) {
            setUserScore(userScore+1)
        }
        else if (ranUser < ranCom) {
            setComScore(comScore+1)
        }
    }
    


  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={btn}>Start</button>

      <div >
        <img src={img[comNum]}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div >
        <img src={img[userNum]}></img>
        <h1>User Score : {userScore}</h1>
      </div>
    
      <h1>결과 : {userScore === 10 ? 'USER 승리!': comScore === 10 ? 'COM 승리!': ''}</h1>
    </div>
  )
}

export default ExDiceGame