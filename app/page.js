import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='bg-black text-center text-white text-2xl py-5'>Mere Kaam React App</h1>
      <form>
        <input type="text" placeholder='Enter Task Name Here' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'/>
        <input type="text" placeholder='Enter Task Details Here' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'/>
      </form>
    </>
  )
}

export default page