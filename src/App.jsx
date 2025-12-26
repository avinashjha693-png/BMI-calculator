import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-green-400'>
      <div>
        <h1 className='text-4xl font-semibold px-10 py-10'>BMI Calculator</h1>
        <div className='flex flex-col'>
          <label htmlFor="weight" className='text-2xl px-5 py-6'>weight (kg)</label>
          <input type='number' className='bg-gray-400 px-4 py-4'></input>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="height" className='text-2xl px-5 py-6'>height (cm)</label>
          <input type='number' className='bg-gray-400 px-4 py-4'></input>
        </div>
        <div className='flex flex-col px-6 py-7 w-full'>
          <button className='text-3xl px-6 py-7 bg-teal-200 '>calculate BMI</button>
        </div>
      </div>

      
      
    </div>
  )
}

export default App