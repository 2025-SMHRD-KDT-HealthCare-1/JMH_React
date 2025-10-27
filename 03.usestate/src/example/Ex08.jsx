import React, { useState } from 'react'


const Ex08 = () => {
    // const [mySrc, setMySrc] = useState('./src/img/ddakori.jpg')
    const [num, setNum] = useState(0)

    let imgArray = ['./src/img/ddakori.jpg', './src/img/myu.jpg', './src/img/marill.jpg']
    
    const chImg1 = () => {
        if(num == 2){
            setNum(0)
        }else {
            setNum(num+1)
        }
    }

    const chImg2 = () => {
        if(num == 0){
            setNum(2)
        }else {
            setNum(num-1)
        }
    }

  return (
    <div>
        <p>
            <img src={imgArray[num]}/>
        </p>
        <button onClick={chImg2}>이전</button>
        <button onClick={chImg1}>다음</button>
    </div>
  )
}

export default Ex08