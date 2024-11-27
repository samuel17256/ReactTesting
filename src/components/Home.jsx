import React from 'react'

const Home = () => {
     const title='My first React'
     const handleClick=()=>{
      alert('hello world, welcome to my first React')
     }
  return (
    <div>
     <div className='p-8'>
        <h1>{ title }</h1>
      </div>
      <div className='flex gap-4 p-10 justify-center h-40'>
      <img src="public/vite.svg"/>
      <img src="src/assets/react.svg"/>
      </div>
      <button className='bg-slate-400 w-20 rounded-md' onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home
