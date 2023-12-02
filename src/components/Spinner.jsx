import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='mt-[270px] flex flex-col items-center'  >
      <div className='spinner'></div>
      <div><h2 className='font-semibold text-xl'>Loading...</h2></div>
    </div>
  )
}

export default Spinner
