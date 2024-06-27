"use client";
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [name, setname] = useState("")
  const [Details, setdetails] = useState("")
  return (
    <>
      <h1 className='mt-2 rounded-lg mx-5 bg-[#421fff] text-center text-white font-bold text-3xl py-5'>Mere Kaam React App</h1>
      <form className='flex items-center gap-10'>
        <input type="text" placeholder='Enter Task Name Here' className='text-lg border-[#421fff] text-[#421fff] bg-[#e6e7ff] outline-[#817aff] placeholder-[#abaaff] border-2 my-8 ml-8 px-4 py-2 rounded-3xl'/>
        <input type="text" placeholder='Enter Task Details Here' className='text-lg border-[#421fff] text-[#421fff] bg-[#e6e7ff] outline-[#817aff] placeholder-[#abaaff] border-2 my-8 px-4 py-2 rounded-3xl'/>
        <button className='bg-[#421fff] text-white px-7 py-3 border-2 rounded-full border-[#5845ff]'>Create Task</button>
      </form>
    </>
  )
}

export default page