import React from 'react'
import './Member.css'

const Member = ({pro, name}) => {
  return (
    <>
        {/* <div className='line'>{props.pro}{" "}{props.name}</div> */}
        <div className='line'>{pro}{" "}{name}</div>
    </>
  )
}

export default Member