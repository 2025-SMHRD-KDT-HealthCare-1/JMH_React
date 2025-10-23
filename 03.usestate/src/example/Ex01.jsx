import React, {useState} from 'react'

const Ex01 = () => {
    let num = 0;
    // useSate 사용하기
    const [num2, setNum2] = useState(0)
    // [state변수, state를 변하게끔 하는 함수] = useState(초기값)

    // 증가, 감소 함수 만들기
    const increase = () => {
        setNum2(num2 + 1)
        console.log(num2)
    }
    
    const decrease = () =>  {
        if (num2 > 0){
            setNum2(num2 - 1)
        }
    }

  return (
    <div>
        <div>
            {num2}
            <br></br>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
        
    </div>
  )
}

export default Ex01