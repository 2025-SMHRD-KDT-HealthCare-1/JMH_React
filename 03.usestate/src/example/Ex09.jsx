import React, { useState } from 'react'
import '../ex09.css'

const Ex09 = () => {
    // 1. input태그에 적은 내용이 계획 추가 버튼 클릭 시, 배열에 저장(state)
    // 2. 저장된 배열 state를 map을 통해서 ul에 출력
    // 3. li에 달려있는 삭제 버튼을 클릭 했을 때, filter 함수를 사용해서
    //    해당 요소만을 지우고, 새롭게 배열을 만들어서 저장(state)

    // todoList가 저장될 state 변수와 input 태그의 값을 받아줄 state 변수를 선언
    const [name, setName] = useState('')
    const [todoList, setTodoList] = useState([])

    // 
    const addItem = () => {
        if (name.trim() === '') return alert('할 일을 적어주세요.');
        setTodoList([...todoList, name])
        setName('')
    }

    const delbtn = (deleteIndex) => {
        setTodoList(todoList.filter((item, i) => i !== deleteIndex))
    }

  return (
    <div>
        <h1>2025 올해는 꼭!! 할 수 있다!</h1>
        {/* controlled input으로 input 태그 제어(useState 이용한 input 제어) */}
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        <button onClick={addItem}>계획 추가</button>

        <h1>TodoList</h1>
        <ul>
            {/* 이 곳에 todoList가 li형태로 들어간다!! */}
            {todoList.map((item, index) => (
                <li key={index}>{item}
                <button onClick={() => delbtn(index)}>삭제</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Ex09